{
  search:[
    {
      type:'event',
      query:'https://www.eventbrite.com/directory/?q={{term}}&loc=Worldwide&spellcheck=1',
      translate:'parseHTML(response)',
      name:{
        selector:'.event_listing_item .info a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.event_listing_item .info a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.event_listing_item .info dl',
        expression:'$(element).find("dd").text()'
      }
    }
  ]
}
