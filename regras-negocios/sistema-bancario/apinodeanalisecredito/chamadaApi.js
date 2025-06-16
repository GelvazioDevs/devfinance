fetch('http://localhost:3000/api/analise-credito', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    idade: 35,
    sexo: 'M',
    salario: 6000,
    investimento: 12000,
    emprestimo: 3000,
    financiamento: 5000
  })
})
.then(res => res.json())
.then(data => console.log(data));
