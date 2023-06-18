// import axios from "axios";

const quote = document.querySelector(".qText");
const author = document.querySelector(".qAuthor");
const generate = document.querySelector(".gen");
const prev = document.querySelector(".prev");
const nextQ = document.querySelector(".next");

const quotes = [];
let display = quotes.length;

document.querySelector("body").addEventListener("onload", generateQuote());

generate.addEventListener("click", (event) => {
  event.preventDefault();
  generateQuote();
});

prev.addEventListener("click", (event) => {
  event.preventDefault();
  prevous();
});

nextQ.addEventListener("click", (event) => {
  event.preventDefault();
  nextQuote();
});


function generateQuote() {
  axios({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": "XyNVBb7SMSoxHMvuno+QqA==c4plYZ1wnZClsjr4" },
    contentType: "application/json",
  })
    .then(function (response) {
      // handle success
      quotes.push(response.data[0]);
      // console.log(quotes);
      let data = response.data[0];
      display = quotes.length - 1;

      util(data.quote, data.author);
      disableNext(display);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

function prevous() {
  display = display - 1;
  const displayQuote = quotes[display];
  util(displayQuote.quote, displayQuote.author);
  disablePrev(display)
}

function nextQuote() {
  display = display + 1;
  const displayQuote = quotes[display];
  util(displayQuote.quote, displayQuote.author);
  disableNext(display)
}

const util = (dQuote, dAuthor) => {
  quote.innerHTML = dQuote;
  author.innerHTML = dAuthor;
};

const disablePrev = (display) => {
  nextQ.removeAttribute("disabled");
  if (display <= 0) {
    prev.setAttribute("disabled", "disabled");
    nextQ.removeAttribute("disabled");
  } else {
    prev.removeAttribute("disabled");
  }
};

const disableNext = (display) => {
  prev.removeAttribute("disabled");
  if (display === quotes.length - 1) {
    nextQ.setAttribute("disabled", "disabled");
    prev.removeAttribute("disabled");
  } else {
    nextQ.removeAttribute("disabled");
  }
};
