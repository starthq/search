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
        selector:'.simple-card a',
        expression:'$(element).attr("data-name")'
      },
      description:{
        selector:'.simple-card p',
        expression:'$(element).text()'
      },      
      link:{
        selector:'.simple-card a',
        expression:'$(element).attr("href")'
      }
    }
  ]
}