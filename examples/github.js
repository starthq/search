{
  search: [
    {
      query:'https://github.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.repolist-name a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.repolist-name a',
        expression:'element.textContent'
      },
      link:{
        selector:'.repolist-name a',
        expression:'"https://github.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.description',
        expression:'element.textContent'
      }
    }
  ]
}
