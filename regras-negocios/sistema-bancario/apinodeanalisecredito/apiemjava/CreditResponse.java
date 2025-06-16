// CreditResponse.java
package com.example.creditanalysis.model;

import java.util.List;

public class CreditResponse {
    private double limiteCredito;
    private List<String> regrasUtilizadas;

    public CreditResponse(double limiteCredito, List<String> regrasUtilizadas) {
        this.limiteCredito = limiteCredito;
        this.regrasUtilizadas = regrasUtilizadas;
    }

    public double getLimiteCredito() {
        return limiteCredito;
    }

    public void setLimiteCredito(double limiteCredito) {
        this.limiteCredito = limiteCredito;
    }

    public List<String> getRegrasUtilizadas() {
        return regrasUtilizadas;
    }

    public void setRegrasUtilizadas(List<String> regrasUtilizadas) {
        this.regrasUtilizadas = regrasUtilizadas;
    }
}
