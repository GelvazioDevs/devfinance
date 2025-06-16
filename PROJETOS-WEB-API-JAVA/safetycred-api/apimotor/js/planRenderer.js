import { formatCurrency, formatDate } from './utils.js';

/**
 * Renders the payment plans to the specified container
 * @param {Array} propostas - The array of payment plans
 * @param {HTMLElement} container - The container element
 */
export function renderPlans(propostas, container) {
  // Clear the container
  container.innerHTML = '';
  
  if (!propostas || propostas.length === 0) {
    container.innerHTML = '<div class="no-results">Nenhum plano encontrado.</div>';
    return;
  }
  
  // Get the template
  const template = document.getElementById('plan-card-template');
  
  // Render each plan
  propostas.forEach(proposta => {
    const planCard = document.importNode(template.content, true).querySelector('.plan-card');
    
    // Check if this is a special plan
    const isSpecialPlan = proposta.plano.includes('JUROS CLIENTE');
    if (isSpecialPlan) {
      planCard.classList.add('special');
    }
    
    // Set plan title
    planCard.querySelector('.plan-title').textContent = proposta.plano;
    
    // Set credit score badge
    const creditScoreBadge = planCard.querySelector('.credit-score');
    creditScoreBadge.textContent = proposta.creditscore.descritivo;
    creditScoreBadge.style.backgroundColor = proposta.creditscore.cor;
    creditScoreBadge.style.color = proposta.creditscore.corfonte;
    
    // Set plan details
    planCard.querySelector('.entrada').textContent = formatCurrency(proposta.valorentrada);
    planCard.querySelector('.financiado').textContent = formatCurrency(proposta.valorfinanciado);
    planCard.querySelector('.parcela').textContent = formatCurrency(proposta.valorparcela);
    planCard.querySelector('.parcelas').textContent = proposta.quantidadeparcelas;
    // planCard.querySelector('.vencimento').textContent = formatDate(proposta.primeirovencimento);
    
    // Render installments
    renderInstallments(proposta.parcelas, planCard.querySelector('.installments-list'));
    
    // Add to container
    container.appendChild(planCard);
  });
}

/**
 * Renders the installment details
 * @param {Array} parcelas - The installments array
 * @param {HTMLElement} container - The container element
 */
function renderInstallments(parcelas, container) {
  // Clear container
  container.innerHTML = '';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'installment-item installment-header';
  header.innerHTML = `
    <span><strong>Parcela</strong></span>
    <span><strong>Vencimento</strong></span>
    <span><strong>Valor</strong></span>
  `;
  container.appendChild(header);
  
  // Render each installment
  parcelas.forEach(parcela => {
    const item = document.createElement('div');
    item.className = 'installment-item';
    item.innerHTML = `
      <span>${parcela.parcela}</span>
      <span>${formatDate(parcela.dataVencimento)}</span>
      <span>${formatCurrency(parcela.valorParcela)}</span>
    `;
    container.appendChild(item);
  });
  
  // Create total row
  const total = parcelas.reduce((sum, parcela) => sum + parcela.valorParcela, 0);
  const totalRow = document.createElement('div');
  totalRow.className = 'installment-item installment-total';
  totalRow.innerHTML = `
    <span></span>
    <span><strong>Total:</strong></span>
    <span><strong>${formatCurrency(total)}</strong></span>
  `;
  container.appendChild(totalRow);
}