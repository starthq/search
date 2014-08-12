{
  search: [
    {
      type:'link',
      query:'https://hn.algolia.com/api/v1/search?query={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.hits string.title',
        expression:'element'
      },
      link:{
        selector:'.hits string.url',
        expression:'element'
      }
    }
  ]
}
