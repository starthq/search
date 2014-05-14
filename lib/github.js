{
  search:[
    {
      query:'https://github.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.repolist-name a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.repolist-name a',
        expression:'"https://github.com" + $(element).attr("href")'
      },
      description:{
        selector:'.description',
        expression:'$(element).text()'
      }
    }
  ]
}
