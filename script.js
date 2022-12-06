const colors = [
  "#51344D",
  "#E94F37",
  "#39375B",
  "#091540",
  "#ED474A",
  "#ACACDE",
  "#2A2B2E",
  "#D81159",
  "#218380",
];

const text = document.querySelector(".text");
const Author = document.querySelector(".author");

const getQuote = () => {
  var randomColor = Math.floor(Math.random() * 6);
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quoteNumber = Math.floor(Math.random() * 20);
      quote = data[quoteNumber].text;
      author = data[quoteNumber].author;
      if (author == null) {
        author = "Anon";
      }
      text.innerHTML = `<i class="fa fa-quote-left" style="font-size: 30px; color:${colors[randomColor]}"></i> ${quote}`;
      Author.innerHTML = `-${author}`;
    });
  document.body.style.backgroundColor = colors[randomColor];
  const buttons = [...document.querySelectorAll(".btn")];
  console.log(buttons);
  const myFunction = (button) => {
    button.style.backgroundColor = colors[randomColor];
  };
  buttons.forEach(myFunction);
};
