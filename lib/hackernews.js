{
  search:[
    {
      type:'link',
      query:'https://www.google.com/search?q=site:news.ycombinator.com%20{{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#search .g .r a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search .g .r a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'#search .g .st',
        expression:'$(element).text()'
      }
    }
  ]
}
