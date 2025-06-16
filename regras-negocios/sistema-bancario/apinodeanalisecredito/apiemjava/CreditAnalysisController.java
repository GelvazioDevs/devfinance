// CreditAnalysisController.java
package com.example.creditanalysis.controller;

import com.example.creditanalysis.model.CreditRequest;
import com.example.creditanalysis.model.CreditResponse;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CreditAnalysisController {

    @PostMapping("/analise-credito")
    public CreditResponse analiseCredito(@RequestBody CreditRequest request) {
        List<String> regras = new ArrayList<>();
        double limite = 0;

        if (request.getSalario() > 5000) {
            limite += request.getSalario() * 0.8;
            regras.add("Salário > 5000: limite += 80% do salário");
        } else {
            limite += request.getSalario() * 0.5;
            regras.add("Salário <= 5000: limite += 50% do salário");
        }

        if (request.getIdade() < 25) {
            limite *= 0.9;
            regras.add("Idade < 25: reduz 10% do limite");
        } else if (request.getIdade() >= 60) {
            limite *= 0.8;
            regras.add("Idade >= 60: reduz 20% do limite");
        }

        if ("F".equalsIgnoreCase(request.getSexo())) {
            limite += 500;
            regras.add("Sexo feminino: bônus de R$500");
        }

        if (request.getInvestimento() > 10000) {
            limite += request.getInvestimento() * 0.3;
            regras.add("Investimento > 10000: +30% do valor investido");
        } else if (request.getInvestimento() > 0) {
            limite += request.getInvestimento() * 0.1;
            regras.add("Investimento entre 1 e 10000: +10% do valor investido");
        }

        double divida = request.getEmprestimo() + request.getFinanciamento();

        if (divida > 10000) {
            limite -= divida * 0.4;
            regras.add("Dívida > 10000: reduz 40% do total das dívidas");
        } else {
            limite -= divida * 0.2;
            regras.add("Dívida <= 10000: reduz 20% do total das dívidas");
        }

        if (request.getSalario() > 8000 && request.getInvestimento() > 20000) {
            limite += 2000;
            regras.add("Salário > 8000 e investimento > 20000: bônus de R$2000");
        }

        if (request.getIdade() >= 30 && request.getIdade() <= 50 && divida < 3000) {
            limite *= 1.1;
            regras.add("Idade entre 30-50 e baixa dívida: aumenta 10% do limite");
        }

        if ("M".equalsIgnoreCase(request.getSexo()) && request.getIdade() < 30 && request.getInvestimento() < 1000) {
            limite -= 500;
            regras.add("Sexo masculino jovem com baixo investimento: penalidade de R$500");
        }

        // Randomizador
        double fatorAleatorio = 0.95 + new Random().nextDouble() * 0.1;
        limite *= fatorAleatorio;
        regras.add(String.format("Fator aleatório aplicado: x%.2f", fatorAleatorio));

        limite = Math.max(0, limite);

        return new CreditResponse(limite, regras);
    }

    @PostMapping("/analise-emprestimo")
    public CreditResponse analiseEmprestimo(@RequestBody CreditRequest request) {
        List<String> regras = new ArrayList<>();
        double limite = 0;

        if (request.getIdade() < 18) {
            regras.add("Idade < 18: crédito negado");
            return new CreditResponse(0, regras);
        }

        if (request.getIdade() > 70) {
            regras.add("Idade > 70: necessário avalista ou garantia real");
            limite -= 1000;
        }

        if (request.getTempoEmprego() < 6) {
            regras.add("Tempo de emprego < 6 meses: risco elevado");
            limite -= 500;
        }

        if (request.getSalario() < 1320) {
            regras.add("Salário abaixo do mínimo: crédito negado");
            return new CreditResponse(0, regras);
        }

        double divida = request.getEmprestimo() + request.getFinanciamento();
        double rendaComprometida = divida / request.getSalario();

        if (rendaComprometida > 0.5) {
            regras.add("Renda comprometida acima de 50%: crédito negado");
            return new CreditResponse(0, regras);
        }

        limite += request.getSalario() * 0.4;
        regras.add("Limite base: 40% da renda líquida");

        if (divida > 10000) {
            limite -= divida * 0.3;
            regras.add("Dívida > 10k: reduz 30% da dívida");
        }

        if (request.getInvestimento() > 20000) {
            limite += request.getInvestimento() * 0.1;
            regras.add("Investimento > 20k: bônus 10%");
        }

        if ("F".equalsIgnoreCase(request.getSexo()) && request.getFilhos() > 0) {
            limite += 500;
            regras.add("Sexo feminino com filhos: bônus R$500");
        }

        if (request.getIdade() >= 26 && request.getIdade() <= 59 && divida < 3000) {
            limite *= 1.15;
            regras.add("Idade 26-59 com dívida baixa: +15% no limite");
        }

        if (request.getScore() < 400) {
            regras.add("Score < 400: crédito negado");
            return new CreditResponse(0, regras);
        }

        // Randomizador
        double fatorAleatorio = 0.95 + new Random().nextDouble() * 0.1;
        limite *= fatorAleatorio;
        regras.add(String.format("Fator de risco aplicado: x%.2f", fatorAleatorio));

        limite = Math.max(0, limite);

        return new CreditResponse(limite, regras);
    }
}
