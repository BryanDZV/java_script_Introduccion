const questionsType = [
  {
    title: "Gender",
    key: "gender",
    questions: ["Man", "Woman"],
  },
  {
    title: "Hair Color",
    key: "hairColor",
    questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
  },
  {
    title: "Moustache",
    key: "moustache",
    questions: ["Yes", "No"],
  },
  {
    title: "Glasses",
    key: "glasses",
    questions: ["Yes", "No"],
  },
  {
    title: "Hat or Cap",
    key: "hatOrCap",
    questions: ["Yes", "No"],
  },
  {
    title: "Clothes color",
    key: "clothesColor",
    questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
  },
  {
    title: "Skin color",
    key: "skinColor",
    questions: ["Light", "Dark"],
  },
  {
    title: "Long Hair",
    key: "longHair",
    questions: ["Yes", "No"],
  },
];

const persons = [
  {
    img: "public/exercise-3/001-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/002-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/003-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/004-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/005-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/006-man.svg",
    gender: "Man",
    hairColor: "Brown",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/007-man.svg",
    gender: "Man",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/008-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/009-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/010-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/011-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/012-woman.svg",
    gender: "Woman",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/013-woman.svg",
    gender: "Woman",
    hairColor: "White",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/014-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/015-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/016-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/017-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/018-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/019-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/020-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/021-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/022-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/023-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/024-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/025-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/026-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/027-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/028-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/029-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/030-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/031-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/032-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/033-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/034-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/035-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/036-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/037-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/038-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/039-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/040-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/041-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/042-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/043-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/044-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/045-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
];

let guessCharacter = persons[Math.floor(Math.random() * persons.length)];
console.log(guessCharacter);

const divCharacters$$ = document.querySelector('[data-function="boardGame"]');
const divQuestions$$ = document.querySelector('[data-function="questions"]');
const contador$$ = document.querySelector('[data-function="clueCount"]');

const drawCharacters = () => {
    divCharacters$$.innerHTML = '';
  for (const person of persons) {
    let img$$ = document.createElement("img");
    img$$.setAttribute("src", person.img);
    img$$.addEventListener('click', () => {
        checkWinner(person);
    })
    divCharacters$$.appendChild(img$$);
  }
};

const drawQuestions = () => {
    divQuestions$$.innerHTML = '';
  for (const question of questionsType) {
    let h2$$ = document.createElement("h2");
    h2$$.textContent = question.title;
    divQuestions$$.appendChild(h2$$);

    for (const option of question.questions) {
      let button$$ = document.createElement("button");
      button$$.textContent = option;
      button$$.setAttribute("key", question.key);

      button$$.addEventListener("click", () => {
        disableCharacters(option, question.key);
        button$$.setAttribute("style", "cursor:not-allowed; opacity:0.2");
        contador$$.textContent = Number(contador$$.textContent) + 1;
      });
      divQuestions$$.appendChild(button$$);
    }
  }
};

const disableCharacters = (option, key) => {
  const discartedCharacters =
    guessCharacter[key] == option
      ? persons.filter((person) => person[key] !== option)
      : persons.filter((person) => person[key] === option);

  for (const person of discartedCharacters) {
    const img$$ = document.querySelector(`[src='${person.img}']`);
    img$$.setAttribute("style", "cursor:not-allowed; opacity:0.2");
  }
};

const checkWinner = (person) => {
    person == guessCharacter ? alert(`Has Acertado con ${contador$$.textContent} pistas`) : console.log("No has acertado");
    reset();
}

const reset = () => {
    drawCharacters();
    drawQuestions();
    contador$$.textContent = '0';
    guessCharacter = persons[Math.floor(Math.random() * persons.length)];
    console.log(guessCharacter);
}

drawCharacters();
drawQuestions();
