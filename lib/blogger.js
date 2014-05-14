{
  search:[
    {
      type:'web',
      query:'https://www.google.com/search?q={{term}}+site:blogspot.com',
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
