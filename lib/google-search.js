{
search:[
    {
      type:'web',
      query:'https://www.google.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'#search .rc .r a',
        expression:'"//www.google.com/s2/favicons?domain_url=" + $(element).attr("href")'
      },
      name:{
        selector:'#search .rc .r a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search .rc .r a',
        expression:'$(element).attr("href")'
      },
      domain:{
        selector:'#search .rc .r a',
        expression:'$(element).attr("href").substring($(element).attr("href").indexOf("/") + 2, $(element).attr("href").indexOf("/", $(element).attr("href").indexOf("/") + 2))'
      },
      description:{
        selector:'#search .rc .st',
        expression:'$(element).text()'
      }
    }
  ]
}
