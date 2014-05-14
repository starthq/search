{
  search:[
    {
      query:'http://www.appannie.com/search/?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.app-results .app-icon a',
        expression:'$(element.childNodes[0]).attr("src")'
      },
      name:{
        selector:'.app-results .app-infos > h3 > a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.app-results .app-infos > h3 > a',
        expression:'"http://www.appannie.com" + $(element).attr("href")'
      },
      description:{
        selector:'.app-results .app-description',
        expression:'$(element).text()'
      }
    }
  ]
}
