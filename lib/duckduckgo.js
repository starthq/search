{
  search:[
    {
      type:'web',
      query:'https://duckduckgo.com/html/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.links_main a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.links_main a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.links_main .snippet',
        expression:'$(element).text()'
      }
    }
  ]
}
