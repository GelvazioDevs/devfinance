const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'banco_portal',
  password: 'sua_senha',
  port: 5432,
});

app.post('/api/login', async (req, res) => {
  const { cpf, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE cpf = $1';
  const { rows } = await pool.query(query, [cpf]);

  if (rows.length === 0) return res.status(401).json({ erro: 'Usuário não encontrado' });

  const usuario = rows[0];

  if (usuario.bloqueado) {
    return res.status(403).json({ erro: 'Conta bloqueada por tentativas inválidas' });
  }

  const senhaConfere = await bcrypt.compare(senha, usuario.senha_hash);
  if (!senhaConfere) {
    await pool.query('UPDATE usuarios SET tentativas_login = tentativas_login + 1 WHERE cpf = $1', [cpf]);

    if (usuario.tentativas_login + 1 >= 5) {
      await pool.query('UPDATE usuarios SET bloqueado = TRUE WHERE cpf = $1', [cpf]);
      return res.status(403).json({ erro: 'Conta bloqueada após 5 tentativas' });
    }

    return res.status(401).json({ erro: 'Senha incorreta' });
  }

  await pool.query('UPDATE usuarios SET tentativas_login = 0 WHERE cpf = $1', [cpf]);

  const token = jwt.sign({ id: usuario.id }, 'segredo_banco', { expiresIn: '15m' });
  res.status(200).json({ token });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
