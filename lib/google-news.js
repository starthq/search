{
  search: [
    {
      query:'https://www.google.com/search?tbm=nws&q={{term}}',
      type:'post',
      translate:'parseHTML(response)',
      name:{
        selector:'.g h3 a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.g h3 a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.g .st',
        expression:'$(element).text()'
      }
    }
  ]
}
