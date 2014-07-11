{
  search:[
    {
      type:'event',
      query:'http://meetup.com/find/?keywords={{term}}',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'.simple-card .card-photo .nametag-photo-name h3',
        expression:'$(element).text()'
      },
      description:{
        selector:'.simple-card .ffbox .ffbox-flex',
        expression:'$(element).find("h4").text() + " | " + $(element).find("p").text()'
      },      
      link:{
        selector:'.simple-card a',
        expression:'$(element).attr("href")'
      }
    }
  ]
}