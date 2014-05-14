{
  search: [
    {
      type:'audio',
      query: 'http://grooveshark.com/search/song?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'li',
        expression:'$(element.childNodes[1]).text()'
      },
      link:{
        selector:'li',
        expression:'$(element.childNodes[5].childNodes[1]).attr("href")'
      },
      description:{
        selector:'li',
        expression:'$(element).text().substr($(element.childNodes[0]).text().length + $(element.childNodes[1]).text().length)'
      }
    }
  ]
}
