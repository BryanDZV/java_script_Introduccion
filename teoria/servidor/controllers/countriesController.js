import { fetchAllCountries } from "../services/countriesService.js";

export const getAllCountries = async (req, res) => {
  try {
    const countries = await fetchAllCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista de países" });
  }
};

//obtener por parametro
// const getCountriesByRegion = async (req, res) => {
//   const countries = req.params.region; //parametro necesario el params
// };
