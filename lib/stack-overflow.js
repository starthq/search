{
  search:[
    {
      type:'answer',
      query:'http://stackoverflow.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.result-link a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.result-link a',
        expression:'"http://stackoverflow.com" + $(element).attr("href")'
      },
      description:{
        selector:'.excerpt',
        expression:'$(element).text()'
      }
    }
  ]
}
