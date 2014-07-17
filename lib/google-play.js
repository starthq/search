{
  search: [
    {
      query:'https://play.google.com/store/search?q={{term}}&c=apps',      
      type:'app',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'.card .title',
        expression:'element.textContent'
      },
      link:{
        selector:'.card .title',
        expression:'"https://play.google.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.card .subtitle',
        expression:'element.textContent'
      },
      icon:{
        selector:'.card .cover-image',
        expression:'element.getAttribute("src")'
      }
    },
    {
      query:'https://play.google.com/store/search?q={{term}}&c=movies',      
      type:'video',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'.card .title',
        expression:'element.textContent'
      },
      link:{
        selector:'.card .title',
        expression:'"https://play.google.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.card .subtitle',
        expression:'element.textContent'
      },
      icon:{
        selector:'.card .cover-image',
        expression:'element.getAttribute("src")'
      }
    },
    {
      query:'https://play.google.com/store/search?q={{term}}&c=music',      
      type:'audio',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'.card .title',
        expression:'element.textContent'
      },
      link:{
        selector:'.card .title',
        expression:'"https://play.google.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.card .subtitle',
        expression:'element.textContent'
      },
      icon:{
        selector:'.card .cover-image',
        expression:'element.getAttribute("src")'
      }
    },
    {
      query:'https://play.google.com/store/search?q={{term}}&c=books',      
      type:'book',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'.card .title',
        expression:'element.textContent'
      },
      link:{
        selector:'.card .title',
        expression:'"https://play.google.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.card .subtitle',
        expression:'element.textContent'
      },
      icon:{
        selector:'.card .cover-image',
        expression:'element.getAttribute("src")'
      }
    }
  ]
}
