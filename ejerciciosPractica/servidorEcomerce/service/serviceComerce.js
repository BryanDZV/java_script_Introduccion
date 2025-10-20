export const fetchEcomerceProductsAll = async () => {
  const url = "https://fakestoreapi.com/products";
  try {
    const peticion = await fetch(url);
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error("TIENES UN ERROR EN LA PETICION", error);
  }
};
