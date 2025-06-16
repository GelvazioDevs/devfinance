// CreditRequest.java
package com.example.creditanalysis.model;

public class CreditRequest {
    private int idade;
    private String sexo;
    private double salario;
    private double investimento;
    private double emprestimo;
    private double financiamento;
    private int filhos;
    private int tempoEmprego;
    private int score;

    // Getters e Setters
    // (gerar automaticamente ou manualmente)
    
    public int getIdade() { return idade; }
    public void setIdade(int idade) { this.idade = idade; }
    
    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }
    
    public double getSalario() { return salario; }
    public void setSalario(double salario) { this.salario = salario; }
    
    public double getInvestimento() { return investimento; }
    public void setInvestimento(double investimento) { this.investimento = investimento; }
    
    public double getEmprestimo() { return emprestimo; }
    public void setEmprestimo(double emprestimo) { this.emprestimo = emprestimo; }
    
    public double getFinanciamento() { return financiamento; }
    public void setFinanciamento(double financiamento) { this.financiamento = financiamento; }
    
    public int getFilhos() { return filhos; }
    public void setFilhos(int filhos) { this.filhos = filhos; }
    
    public int getTempoEmprego() { return tempoEmprego; }
    public void setTempoEmprego(int tempoEmprego) { this.tempoEmprego = tempoEmprego; }
    
    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
}
