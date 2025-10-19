import { fetchMarvelCharacters } from "../services/marvelService.js";

export const getMarvelCharacters = async (req, res) => {
  const characters = await fetchMarvelCharacters();
  res.json(characters);
};
