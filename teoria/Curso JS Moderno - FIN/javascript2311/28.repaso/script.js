const main$$ = document.querySelector("main");
const getCharacters = async () => {
  //  fetch("https://starwars-server.vercel.app/characters")
  //  .then((response)=> response.json())
  //  .then((result) => console.log(result.data.characters))
  const response = await fetch("https://starwars-server.vercel.app/characters");
  const results = await response.json();

  //    console.log(results.data.characters);
  return results.data.characters;
};
const mapearCharacters = (charactersSinMapear) => {
  // console.log("función mapear",charactersSinMapear);
  //  const charactersMapeados = charactersSinMapear.map((character) =>({
  //     // primer campo la propiedad y segundo campo donde esta situado
  //     nombre: character.name,
  //     foto:character.image,
  //     rol:character.role
  //  }))
  //  return charactersMapeados
  return charactersSinMapear.map((character) => ({
    // primer campo la propiedad y segundo campo donde esta situado
    nombre: character.name,
    foto: character.image,
    rol: character.role,
  }));
  //  console.log(charactersMapeados);
};
const pintarCharacters = (characters) => {
  // console.log("pintar",characters);
  main$$.innerHTML = "";
  for (const character of characters) {
    // let characterDiv$$ = document.createElement("div")
    // let h2$$ = document.createElement("h2")
    // let img$$ = document.createElement("img")
    // let p$$ = document.createElement("p")

    // h2$$.textContent=character.nombre
    // img$$.setAttribute("src",character.foto)
    // img$$.setAttribute("alt",character.nombre)
    // p$$.textContent=character.rol

    // characterDiv$$.appendChild(p$$)
    // characterDiv$$.appendChild(img$$)
    // characterDiv$$.appendChild(h2$$)
    // main$$.appendChild(characterDiv$$)

    let characterDiv$$ = document.createElement("div");
    characterDiv$$.innerHTML = `
        <h2>${character.nombre}</h2>
        <img src="${character.foto}" alt="${character.nombre}">
        <p>${character.rol}</p>
        `;
    main$$.appendChild(characterDiv$$);
  }
};
const cogerInput = (characters) => {
  const input$$ = document.querySelector("input");
  // console.log(input$$);
  input$$.addEventListener("input", () =>
    filtrarCharacters(characters, input$$.value)
  );
};
const filtrarCharacters = (arrayParaFiltrar, filtro) => {
  let CharactersFiltrados = arrayParaFiltrar.filter((character) =>
    character.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  // console.log(CharactersFiltrados);
  pintarCharacters(CharactersFiltrados);
};
const init = async () => {
  // 1º paso es esperar a la devolución de mi getChracter para disponer de estos personajes en lo que estoy usando como guion o como hoja de ruta
  const characters = await getCharacters();
  // 2º paso es mapear mis personajes que solo existen aquí y se los tengo que enviar a mi función mapear, para luego enviarselos al resto de funciones
  const charactersMapeados = mapearCharacters(characters);
  // console.log("funcion init despues de mapear",charactersMapeados);
  //   3º paso es mandarle a nuestra función pintar por parametro  y para que siga el orden logico del codigo, les voy a psar mis characteres ya mapeados(que siguen solo existiendo aqui)
  pintarCharacters(charactersMapeados);
  //   4º paso coger mi input para luego mandarlo a filtrar, le voy a tener que enviar los characteres mapeados para que disponga de esa información
  cogerInput(charactersMapeados);
};
init();
