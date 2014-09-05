{
  search:[
    {
      query:'https://finance.search.yahoo.com/search?p={{term}}+stock+price',
      type:'answer',
      translate:'parseHTML(response)',
      name:{
        selector:'.result',
        expression:'$(element).text()'
      },
      link:{
        selector:'.result a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.stock-price-info .quote',
        expression:'$(element).text()'
      }
    },
    {
      query:'https://finance.search.yahoo.com/search?p={{term}}',
      type:'article',
      translate:'parseHTML(response)',
      name:{
        selector:'.yschttl.spt',
        expression:'$(element).text()'
      },
      link:{
        selector:'li .spt',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.abstr',
        expression:'$(element).text()'
      }
    },
    {
      query:'https://finance.search.yahoo.com/search?p={{term}}',
      type:'video',
      translate:'parseHTML(response)',
      name:{
        selector:'.mt-10 h4',
        expression:'$(element).text()'
      },
      link:{
        selector:'.mt-10 a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.mt-10 p',
        expression:'$(element).text()'
      }
    }
  ]
}
