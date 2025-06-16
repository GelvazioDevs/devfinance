// api_analise_credito.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Função de randomização de regras e limite
function calcularLimiteCredito({ idade, sexo, salario, investimento, emprestimo, financiamento }) {
  const regrasAplicadas = [];
  let limite = 0;

  // Regra base de salário
  if (salario > 5000) {
    limite += salario * 0.8;
    regrasAplicadas.push("Salário > 5000: limite += 80% do salário");
  } else {
    limite += salario * 0.5;
    regrasAplicadas.push("Salário <= 5000: limite += 50% do salário");
  }

  // Regra de idade
  if (idade < 25) {
    limite *= 0.9;
    regrasAplicadas.push("Idade < 25: reduz 10% do limite");
  } else if (idade >= 60) {
    limite *= 0.8;
    regrasAplicadas.push("Idade >= 60: reduz 20% do limite");
  }

  // Regra de sexo
  if (sexo === 'F') {
    limite += 500;
    regrasAplicadas.push("Sexo feminino: bônus de R$500");
  }

  // Regra de investimento
  if (investimento > 10000) {
    limite += investimento * 0.3;
    regrasAplicadas.push("Investimento > 10000: +30% do valor investido");
  } else if (investimento > 0) {
    limite += investimento * 0.1;
    regrasAplicadas.push("Investimento entre 1 e 10000: +10% do valor investido");
  }

  // Penalidade por empréstimos e financiamentos
  const divida = emprestimo + financiamento;
  if (divida > 10000) {
    limite -= divida * 0.4;
    regrasAplicadas.push("Dívida > 10000: reduz 40% do total das dívidas");
  } else {
    limite -= divida * 0.2;
    regrasAplicadas.push("Dívida <= 10000: reduz 20% do total das dívidas");
  }

  // Regras adicionais
  if (salario > 8000 && investimento > 20000) {
    limite += 2000;
    regrasAplicadas.push("Salário > 8000 e investimento > 20000: bônus de R$2000");
  }

  if (idade >= 30 && idade <= 50 && divida < 3000) {
    limite *= 1.1;
    regrasAplicadas.push("Idade entre 30-50 e baixa dívida: aumenta 10% do limite");
  }

  if (sexo === 'M' && idade < 30 && investimento < 1000) {
    limite -= 500;
    regrasAplicadas.push("Sexo masculino jovem com baixo investimento: penalidade de R$500");
  }

  // Randomizador adicional
  const fatorAleatorio = 0.95 + Math.random() * 0.1;
  limite *= fatorAleatorio;
  regrasAplicadas.push(`Fator aleatório aplicado: x${fatorAleatorio.toFixed(2)}`);

  return {
    limiteCredito: Math.max(0, limite.toFixed(2)),
    regrasUtilizadas: regrasAplicadas
  };
}

// Função alternativa: cálculo de crédito focado em empréstimos
function calcularLimiteCreditoV2({ idade, sexo, salario, investimento, emprestimo, financiamento, filhos, tempoEmprego, score }) {
  const regras = [];
  let limite = 0;
  const divida = emprestimo + financiamento;
  const rendaComprometida = divida / salario;

  if (idade < 18) {
    return { limiteCredito: 0, regrasUtilizadas: ["Idade < 18: crédito negado"] };
  }

  if (idade > 70) {
    regras.push("Idade > 70: necessário avalista ou garantia real");
    limite -= 1000;
  }

  if (tempoEmprego < 6) {
    regras.push("Tempo de emprego < 6 meses: risco elevado");
    limite -= 500;
  }

  if (salario < 1320) {
    return { limiteCredito: 0, regrasUtilizadas: ["Salário abaixo do mínimo: crédito negado"] };
  }

  if (rendaComprometida > 0.5) {
    return { limiteCredito: 0, regrasUtilizadas: ["Renda comprometida acima de 50%: crédito negado"] };
  }

  limite += salario * 0.4;
  regras.push("Limite base: 40% da renda líquida");

  if (divida > 10000) {
    limite -= divida * 0.3;
    regras.push("Dívida > 10k: reduz 30% da dívida");
  }

  if (investimento > 20000) {
    limite += investimento * 0.1;
    regras.push("Investimento > 20k: bônus 10%");
  }

  if (sexo === 'F' && filhos > 0) {
    limite += 500;
    regras.push("Sexo feminino com filhos: bônus R$500");
  }

  if (idade >= 26 && idade <= 59 && divida < 3000) {
    limite *= 1.15;
    regras.push("Idade 26-59 com dívida baixa: +15% no limite");
  }

  if (score < 400) {
    return { limiteCredito: 0, regrasUtilizadas: ["Score < 400: crédito negado"] };
  }

  // Aleatoriedade
  const risco = 0.95 + Math.random() * 0.1;
  limite *= risco;
  regras.push(`Fator de risco aplicado: x${risco.toFixed(2)}`);

  return {
    limiteCredito: Math.max(0, limite.toFixed(2)),
    regrasUtilizadas: regras
  };
}

// Rota principal da API
app.post('/api/analise-credito', (req, res) => {
  const resultado = calcularLimiteCredito(req.body);
  res.json(resultado);
});

// Rota alternativa para empréstimo
app.post('/api/analise-emprestimo', (req, res) => {
  const resultado = calcularLimiteCreditoV2(req.body);
  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
