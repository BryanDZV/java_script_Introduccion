import { fetchEcomerceProductsAll } from "../service/serviceComerce.js"; // OJO: añade .js

export const getProductsAll = async (req, res) => {
  const productsAll = await fetchEcomerceProductsAll();
  res.json(productsAll);
};
