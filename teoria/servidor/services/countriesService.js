const BASE_URL = process.env.BASE_URL;

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    if (!response.ok) throw new Error("Error en la petición a la API");
    const data = await response.json();

    return data.map((country) => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "N/A",
      region: country.region,
      population: country.population,
      flag: country.flags?.png,
    }));
  } catch (error) {
    console.error("Error al hacer la petición:", error);
    return [];
  }
};
