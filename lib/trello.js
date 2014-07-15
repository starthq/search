{
  search:[
    {
      type:'link',
      query:'https://trello.com/1/search?modelTypes=cards&elasticsearch=true&query={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.cards :root',
        expression:'element.name'
      },
      description:{
        selector:'.cards .desc',
        expression: 'element'
      },
      link:{
        selector:'.cards .url',
        expression:'element'
      }
    }
  ]
}
