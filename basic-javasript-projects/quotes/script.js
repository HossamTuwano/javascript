const quotes = [
  {
    name: "Stephen King",
    quote: "Get busy living or get busy dying",
  },
  {
    name: "John F. Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly",
  },
  {
    name: "Abraham Lincoln",
    quote:
      "I'm a success today because I had a friend who believed in me and I did't have the heart to let him down",
  },
  {
    name: "Leornado Da Vinci",
    quote:
      "It had long since come to any attention that people of accomplishment rarely set back and let things happen to them. They went our and happend to things",
  },
  {
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
