let obj = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    name: "United States of America",
    population: "331,449,281",
    region: "Americas",
    capital: "Washington, D.C.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    name: "BRAZIL",
    population: "212,559,417",
    region: "Americas",
    capital: "Brasilia",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavik",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul",
  }
];

const firstDiv = document.createElement("div");
firstDiv.setAttribute("id", "first-div");
document.body.append(firstDiv);

function flags(obj) {
  const container = document.createElement("div");
  container.setAttribute("class", "main-container");
  firstDiv.append(container);

  const flag = document.createElement("img");
  flag.setAttribute("class", "img");
  flag.setAttribute("src", obj.img);
  container.append(flag);

  const secondDiv = document.createElement("div");
  secondDiv.setAttribute("id", "country");
  container.append(secondDiv);

  const _name = document.createElement("h3");
  _name.innerHTML = obj.name;
  secondDiv.append(_name);

  const _population = document.createElement("p");
  _population.innerHTML =  "<b>Population: </b>" + obj.population;
  secondDiv.append(_population);

  const _region = document.createElement("p");
  _region.innerHTML = "<b>Region: </b>" + obj.region;
  secondDiv.append(_region);

  const _capital = document.createElement("p");
  _capital.innerHTML = "<b>Capital: </b>" + obj.capital;
  secondDiv.append(_capital);
};

for (let i = 0; i < obj.length; i++) {
  flags(obj[i]);
};