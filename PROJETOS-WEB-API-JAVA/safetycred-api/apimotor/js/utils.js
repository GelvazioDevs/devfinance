/**
 * Formats a currency value to BRL format
 * @param {number} value - The value to format
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value);
}

/**
 * Formats a date string
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} - Formatted date string
 */
export function formatDate(dateString) {
  // Check if it's a datetime string (with time component)
  const hasTime = dateString.includes(' ');
  
  let date;
  if (hasTime) {
    // Split date and time
    const [dateComponent, timeComponent] = dateString.split(' ');
    const [year, month, day] = dateComponent.split('-');
    date = new Date(`${year}-${month}-${day}T${timeComponent}`);
  } else {
    // Simple date
    const [year, month, day] = dateString.split('-');
    date = new Date(year, month - 1, day);
  }
  
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: hasTime ? '2-digit' : undefined,
    minute: hasTime ? '2-digit' : undefined
  });
}

/**
 * Checks if a string contains a specific substring (case insensitive)
 * @param {string} text - The text to search in
 * @param {string} search - The string to search for
 * @returns {boolean} - Whether the substring was found
 */
export function containsText(text, search) {
  return text.toLowerCase().includes(search.toLowerCase());
}