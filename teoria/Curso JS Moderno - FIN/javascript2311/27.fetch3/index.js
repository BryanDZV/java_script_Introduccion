const getFilms = async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    console.log(response);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

const drawFilms = (films) => {
  const div$$ = document.querySelector(".films");
  div$$.innerHTML = "";

  for (const film of films) {
    const div = document.createElement("div");
    div.classList.add("film");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    img.setAttribute("src", film.image);
    img.setAttribute("alt", film.title);

    h4.textContent = film.title;
    p.textContent = film.description;
    p2.textContent = film.director;

    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);

    div$$.appendChild(div);
  }
};

const filtrar = (films) => {
  let input$$ = document.querySelector("input");
  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(input$$.value.toLowerCase()) ||
      film.director.toLowerCase().includes(input$$.value.toLowerCase()) ||
      film.description.toLowerCase().includes(input$$.value.toLowerCase()) 
  );
  drawFilms(filteredFilms);
};

const pintarFiltro = (films) => {
  let input$$ = document.createElement("input");
  input$$.setAttribute("type", "text");
  input$$.addEventListener("input", () => filtrar(films));
  document.body.appendChild(input$$);
};

const init = async () => {
  const films = await getFilms();
  console.log(films);
  pintarFiltro(films);
  const div$$ = document.createElement("div");
  div$$.classList.add("films");
  document.body.appendChild(div$$);
  drawFilms(films);
};

init();
