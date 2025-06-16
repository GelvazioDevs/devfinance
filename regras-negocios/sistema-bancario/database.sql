CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL,
    token_mfa VARCHAR(6),
    token_expira_em TIMESTAMP,
    tentativas_login INT DEFAULT 0,
    bloqueado BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE transferencias (
  id SERIAL PRIMARY KEY,
  conta_origem INT NOT NULL,
  conta_destino INT NOT NULL,
  valor NUMERIC(10,2) NOT NULL CHECK (valor >= 1),
  data TIMESTAMP DEFAULT NOW()
);


CREATE TABLE emprestimos (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL,
  valor NUMERIC(12,2) NOT NULL,
  parcelas INT NOT NULL CHECK (parcelas BETWEEN 1 AND 60),
  aprovado BOOLEAN DEFAULT FALSE,
  data_solicitacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE aplicacoes (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL,
  modalidade VARCHAR(20),
  valor NUMERIC(12,2),
  data_aplicacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE investimentos (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL,
  tipo VARCHAR(30),
  valor NUMERIC(12,2),
  data TIMESTAMP DEFAULT NOW()
);
