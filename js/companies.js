import { loadData, initMenu } from './utils.js';

main();
initMenu();

/**
 *
 * @return {Promise<void>}
 */
async function main() {
  const companies = await getCompanies();
  companies.forEach((item) => insertCompany(item));
}

/**
 *
 * @return {Promise<*>}
 */
async function getCompanies() {
  return await loadData({ url: 'php/companies.php' });
}

/**
 *
 * @param item
 */
function insertCompany(item) {
  const tableBody = document.querySelector('.table__body');

  const tableRow = document.createElement('tr');
  tableRow.classList.add('table__body-row');

  for (let key in item) {
    const tableCell = document.createElement('td');
    tableCell.classList.add('table__body-cell');
    tableCell.innerText = item[key];
    tableRow.append(tableCell);
  }

  tableBody.append(tableRow)
}
