const STATUS_NAO_AUTORIZADO = 403;
/**
 * Fetches data from the JSON file
 * In a real application, this would be an API call
 */
export async function fetchData() {
  try {
    // For development/demo purposes, we're loading the JSON directly
    // In a real app, this would be a fetch call to an API endpoint
    return {
      "datahora": "2025-05-09 10:03:57",
      "limite": {
        "valor": 900,
        "totalabertodocliente": 205.9,
        "saldo": 694.1,
        "tipocliente": "CLIENTE_NOVO",
        "motivosaldozero": "",
        "risco": "MUITO_BAIXO",
        "acaoSugerida": "VENDE",
        "politicacredito": [],
        "limiteGarantido": true
      },
      "listaUsuarioAutorizador": [
        {
          "cpf": "949.250.209-78",
          "nome": "ELICARLOS ZAMPIERON"
        },
        {
          "cpf": "041.955.879-99",
          "nome": "JULIANA DA SILVA"
        },
        {
          "cpf": "033.990.849-19",
          "nome": "GRACIELE BUSSETI GIRALDI"
        },
        {
          "cpf": "034.929.209-42",
          "nome": "DEISE FABIANA BLAUTH"
        },
        {
          "cpf": "105.531.770-87",
          "nome": "API BELÍSSIMA - 3"
        }
      ],
      "propostas": [
        {
          "id": "0060da0b8163e02121908873bda49896",
          "plano": "0+1 - Carne",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 250,
          "quantidadeparcelas": 1,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "MEDIO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 250,
              "valorParcela": 250
            }
          ]
        },
        {
          "id": "b70f32fc3a4c0f673bacb21ea399f490",
          "plano": "0+2 - Carne",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 125,
          "quantidadeparcelas": 2,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "MEDIO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 125,
              "valorParcela": 125
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 125,
              "valorParcela": 125
            }
          ]
        },
        {
          "id": "01cec5f596956250db8fa04722392768",
          "plano": "0+3 - Carne",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 84,
          "quantidadeparcelas": 3,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "MEDIO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 84,
              "valorParcela": 84
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 83,
              "valorParcela": 83
            },
            {
              "parcela": 3,
              "dataVencimento": "2025-08-09",
              "valorOriginal": 83,
              "valorParcela": 83
            }
          ]
        },
        {
          "id": "c3e70a0a312e31c7cb77ba600d661f0b",
          "plano": "0+4 - Carne",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 64,
          "quantidadeparcelas": 4,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "ALTO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 64,
              "valorParcela": 64
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 62,
              "valorParcela": 62
            },
            {
              "parcela": 3,
              "dataVencimento": "2025-08-09",
              "valorOriginal": 62,
              "valorParcela": 62
            },
            {
              "parcela": 4,
              "dataVencimento": "2025-09-09",
              "valorOriginal": 62,
              "valorParcela": 62
            }
          ]
        },
        {
          "id": "74be1df4aefe4e9bbb69f3f221b4b6c4",
          "plano": "0+5 - Carne JURO CLIENTE ESPECIAL",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 50,
          "quantidadeparcelas": 5,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "ALTO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 50,
              "valorParcela": 50
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 50,
              "valorParcela": 50
            },
            {
              "parcela": 3,
              "dataVencimento": "2025-08-09",
              "valorOriginal": 50,
              "valorParcela": 50
            },
            {
              "parcela": 4,
              "dataVencimento": "2025-09-09",
              "valorOriginal": 50,
              "valorParcela": 50
            },
            {
              "parcela": 5,
              "dataVencimento": "2025-10-09",
              "valorOriginal": 50,
              "valorParcela": 50
            }
          ]
        },
        {
          "id": "c03712ed85029c94c6274c28aa625ecd",
          "plano": "0+6 - Carne",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 45,
          "quantidadeparcelas": 6,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "ALTO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 45,
              "valorParcela": 45
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 41,
              "valorParcela": 41
            },
            {
              "parcela": 3,
              "dataVencimento": "2025-08-09",
              "valorOriginal": 41,
              "valorParcela": 41
            },
            {
              "parcela": 4,
              "dataVencimento": "2025-09-09",
              "valorOriginal": 41,
              "valorParcela": 41
            },
            {
              "parcela": 5,
              "dataVencimento": "2025-10-09",
              "valorOriginal": 41,
              "valorParcela": 41
            },
            {
              "parcela": 6,
              "dataVencimento": "2025-11-09",
              "valorOriginal": 41,
              "valorParcela": 41
            }
          ]
        },
        {
          "id": "54202aef2193bb0bfece270db60d4bcc",
          "plano": "0+7 - Carne JURO CLIENTE ESPECIAL",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 40,
          "quantidadeparcelas": 7,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "ALTO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 40,
              "valorParcela": 40
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 35,
              "valorParcela": 35
            },
            {
              "parcela": 3,
              "dataVencimento": "2025-08-09",
              "valorOriginal": 35,
              "valorParcela": 35
            },
            {
              "parcela": 4,
              "dataVencimento": "2025-09-09",
              "valorOriginal": 35,
              "valorParcela": 35
            },
            {
              "parcela": 5,
              "dataVencimento": "2025-10-09",
              "valorOriginal": 35,
              "valorParcela": 35
            },
            {
              "parcela": 6,
              "dataVencimento": "2025-11-09",
              "valorOriginal": 35,
              "valorParcela": 35
            },
            {
              "parcela": 7,
              "dataVencimento": "2025-12-09",
              "valorOriginal": 35,
              "valorParcela": 35
            }
          ]
        },
        {
          "id": "a169f2fe62415aacac0eae4ef0bb6d2e",
          "plano": "0+8 - Carne",
          "valorentrada": 0,
          "valorfinanciado": 250,
          "valorparcela": 33,
          "quantidadeparcelas": 8,
          "primeirovencimento": "2025-06-09",
          "creditscore": {
            "cor": "#00E861",
            "corfonte": "#FFFFFF",
            "risco": "ALTO",
            "acaoSugerida": "VENDE",
            "descritivo": "CLIENTE COM LIMITE GARANTIDO"
          },
          "politicacredito": [],
          "parcelas": [
            {
              "parcela": 1,
              "dataVencimento": "2025-06-09",
              "valorOriginal": 33,
              "valorParcela": 33
            },
            {
              "parcela": 2,
              "dataVencimento": "2025-07-09",
              "valorOriginal": 31,
              "valorParcela": 31
            },
            {
              "parcela": 3,
              "dataVencimento": "2025-08-09",
              "valorOriginal": 31,
              "valorParcela": 31
            },
            {
              "parcela": 4,
              "dataVencimento": "2025-09-09",
              "valorOriginal": 31,
              "valorParcela": 31
            },
            {
              "parcela": 5,
              "dataVencimento": "2025-10-09",
              "valorOriginal": 31,
              "valorParcela": 31
            },
            {
              "parcela": 6,
              "dataVencimento": "2025-11-09",
              "valorOriginal": 31,
              "valorParcela": 31
            },
            {
              "parcela": 7,
              "dataVencimento": "2025-12-09",
              "valorOriginal": 31,
              "valorParcela": 31
            },
            {
              "parcela": 8,
              "dataVencimento": "2026-01-09",
              "valorOriginal": 31,
              "valorParcela": 31
            }
          ]
        }
      ]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Falha ao carregar os dados. Por favor, tente novamente mais tarde.');
  }
}
