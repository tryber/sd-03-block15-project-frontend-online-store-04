const myObject = { method: 'GET', headers: { Accept: 'application/json' } };

export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories', myObject);
  const result = await data.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, myObject);
  const result = await data.json();
  return result;
}
