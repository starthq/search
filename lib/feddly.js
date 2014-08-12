{
  search: [
    {
      type:'link',
      query:'http://feedly.com/v3/search/feeds?q={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.results .title',
        expression:'element'
      },
      link:{
        selector:'.results :has(:root > .website)',
        expression:'element.website'
      },
      description:{
        selector:'.results :has(:root > .description)',
        expression:'element.description'
      }
    }
  ]
}