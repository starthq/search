{
  search:[
    {
      type:'task',
      query:'https://app.trackduck.com/api/v1/search?query={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.issues .description',
        expression:'element'
      },
      link:{
        selector:'.issues .address',
        expression:'element'
      }
    },
{
      type:'link',
      query:'https://app.trackduck.com/api/v1/search?query={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.comments .message',
        expression:'element'
      },
      link:{
        selector:'.comments .address',
        expression:'element'
      }
    }
  ]
}
