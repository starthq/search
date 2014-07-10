{
  search: [
    {
      query:'https://www.goodreads.com/search?q={{term}}',
      type:'book',
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
      }
    },
    {
      query:'https://www.goodreads.com/review/list/?search%5Bquery%5D={{term}}',
      type:'book',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'.bookalike .title a',
        expression:'element.textContent + "[from My Books]"'
      },
      link:{
        selector:'.bookalike .title a',
        expression:'"https://www.goodreads.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.bookalike .author a',
        expression:'"by " + element.textContent'
      },
      icon:{
        selector:'.cover img',
        expression:'element.getAttribute("src")'
      }
    }
  ]
}
