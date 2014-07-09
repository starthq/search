{
  search: [
    {
      query:'https://www.goodreads.com/search?q={{term}}',
      headers:{
        Accept:'text/html'
    },
      translate:'parseHTML(response)',
      name:{
        selector:'.bookTitle span',
        expression:'element.textContent'
      },
      link:{
        selector:'.bookTitle',
        expression:'"https://www.goodreads.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.authorName span',
        expression:'"by " + element.textContent'
      },
      icon:{
        selector:'.bookSmallImg',
        expression:'element.getAttribute("src")'
      },
    }
  ]
}
