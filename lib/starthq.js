{
  name:'StartHQ',
  url:'https://starthq.com/',
  search:[
    {
      type:'app',
      query:'https://starthq.com/api/v1/search?term={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.items .name',
        expression:'element'
      },
      link:{
        selector:'.items .slug',
        expression:'"https://starthq.com/apps/" + element'
      },
      description:{
        selector:'.items .description',
        expression:'element'
      }
    }
  ]
}
