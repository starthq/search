{
  search:[
    {
      type: 'link',
      query:'http://quizlet.com/subject/{{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.set-name-text',
        expression:'$(element).text()'
      },
      description:{
        selector:'.added.reason > time',
        expression:'$(element).text()'
      },
      link:{
        selector:'.set-link.link',
        expression:'"http://quizlet.com" + $(element).attr("href")'
      }
    }
  ]
}