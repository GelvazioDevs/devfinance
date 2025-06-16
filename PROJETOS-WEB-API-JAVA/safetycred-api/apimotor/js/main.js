import { fetchData } from './api.js';
import { formatCurrency, formatDate } from './utils.js';
import { renderPlans } from './planRenderer.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
  document.querySelector("#btnCallApiMotor").addEventListener("click", function (e) {
    callApiMotorCredito();
  });
});

async function callApiMotorCredito() {
  const plansContainer = document.getElementById('plans-container');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const rota = document.getElementById('rotaAPI').value;
  const apiKey = document.getElementById('apiKey').value;
  const clicpf = document.getElementById('clicpf').value;
  const primeiroVencimento = document.getElementById('primeiroVencimento').value;
  const valorfinanciado = parseFloat(document.getElementById('valorfinanciado').value);
  const simulacaoProposta = document.getElementById('simulacaoProposta').checked == true;

  if (apiKey == "") {
    alert("Chave de Api não informada!");
    return false;
  }

  if (clicpf == "") {
    alert("clicpf não informado!");
    return false;
  }

  if (valorfinanciado == "") {
    alert("valorfinanciado não informado!");
    return false;
  }

  if (primeiroVencimento == "") {
    alert("primeiroVencimento não informado!");
    return false;
  }

  let data = null;

  try {
    // Show loading state
    plansContainer.innerHTML = '<div class="loading"></div>';

    // Fetch data
    const body = getBody(rota, clicpf, valorfinanciado, primeiroVencimento, simulacaoProposta);

    data = await fetchData();
    //data = await postToMotorAPI(body, rota, apiKey);

    console.log(data);

    // Display header information
    displayHeaderInfo(data);

    // Render the plans
    renderPlans(data.propostas, plansContainer);

    // Setup event listeners
    setupEventListeners(data.propostas, plansContainer, searchInput, sortSelect);
  } catch (error) {
    plansContainer.innerHTML = `
      <div class="error-message">
        <p>Erro ao carregar os dados: ${error.message}</p>
      </div>
    `;
    console.error('Error loading data:', error);
  }
}

function getBody(rota, clicpf, valorfinanciado, primeirovencimento, simulacaoProposta) {
  let body = {
    "cliente": {
      "identificacao": {
        "cpf": clicpf
      }
    },
    "simulacao": {
      "valorfinanciado": valorfinanciado
    }
  };

  if (simulacaoProposta) {
    body = {
      "cliente": {
        "identificacao": {
          "cpf": clicpf
        }
      },
      "propostas": [
        {
          "identificador": "39",
          "valorentrada": 0,
          "valorfinanciado": valorfinanciado,
          "quantidadeparcelas": 2,
          "primeirovencimento": primeirovencimento
        },
        {
          "identificador": "40",
          "valorentrada": 0,
          "valorfinanciado": valorfinanciado,
          "quantidadeparcelas": 3,
          "primeirovencimento": primeirovencimento
        }
      ]
    };
  }

  console.log("body")
  console.log(body)

  return body;
}

function displayHeaderInfo(data) {
  // Display date and time
  const datahoraElement = document.getElementById('datahora');
  datahoraElement.textContent = `Data: ${formatDate(data.datahora)}`;

  // Display credit limit info
  const creditLimitElement = document.getElementById('credit-limit');
  creditLimitElement.textContent = `Limite Disponível: ${formatCurrency(data.limite.saldo)} de ${formatCurrency(data.limite.valor)}`;
}

function setupEventListeners(propostas, container, searchInput, sortSelect) {
  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    const filteredPropostas = filterPropostas(propostas, searchTerm);
    const sortedPropostas = sortPropostas(filteredPropostas, sortValue);
    renderPlans(sortedPropostas, container);
  });

  // Sort functionality
  sortSelect.addEventListener('change', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    const filteredPropostas = filterPropostas(propostas, searchTerm);
    const sortedPropostas = sortPropostas(filteredPropostas, sortValue);
    renderPlans(sortedPropostas, container);
  });

  // Toggle installments visibility
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-installments')) {
      const installmentsList = e.target.nextElementSibling;
      installmentsList.classList.toggle('hidden');
      e.target.textContent = installmentsList.classList.contains('hidden')
        ? 'Ver parcelas'
        : 'Ocultar parcelas';
    }
  });
}

function filterPropostas(propostas, searchTerm) {
  if (!searchTerm) return propostas;

  return propostas.filter(proposta =>
    proposta.plano.toLowerCase().includes(searchTerm) ||
    proposta.creditscore.descritivo.toLowerCase().includes(searchTerm)
  );
}

function sortPropostas(propostas, sortBy) {
  const propostasCopy = [...propostas];

  switch (sortBy) {
    case 'parcelas-asc':
      return propostasCopy.sort((a, b) => a.quantidadeparcelas - b.quantidadeparcelas);
    case 'parcelas-desc':
      return propostasCopy.sort((a, b) => b.quantidadeparcelas - a.quantidadeparcelas);
    case 'valor-asc':
      return propostasCopy.sort((a, b) => a.valorparcela - b.valorparcela);
    case 'valor-desc':
      return propostasCopy.sort((a, b) => b.valorparcela - a.valorparcela);
    default:
      return propostasCopy;
  }
}

// Initialize and reveal animations for plan cards
function initializeAnimations() {
  const planCards = document.querySelectorAll('.plan-card');
  planCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
  });
}