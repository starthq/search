{
  search:[
    {
      type:'event',
      query:'http://www.meetup.com/find/events/?keywords={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.wrapNice',
        expression:'$(element).text()'
      },
      link:{
        selector:'.wrapNice',
        expression:'$(element).attr("href")'
      }
    },
    {
      type:'group',
      query:'http://meetup.com/find/?keywords={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.simple-card .card-photo .nametag-photo-name h3',
        expression:'$(element).text()'
      },
      link:{
        selector:'.simple-card a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'.simple-card .ffbox .ffbox-flex',
        expression:'$(element).find("h4").text() + " | " + $(element).find("p").text()'
      }, 
    }
  ]
}
