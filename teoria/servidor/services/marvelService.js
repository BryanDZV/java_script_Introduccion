import { log } from "console";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.MARVEL_BASE_URL;
const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

export const fetchMarvelCharacters = async () => {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");

  const url = `${BASE_URL}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data.data.results.map((char) => ({
      name: char.name,
      description: char.description || "Sin descripción",
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    }));
  } catch (error) {
    console.error("Error al obtener personajes de Marvel:", error);
  }
};
