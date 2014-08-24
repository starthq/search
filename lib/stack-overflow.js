{
  search:[
    {
      type:'answer',
      query:'http://stackoverflow.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.result-link a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.result-link a',
        expression:'"http://stackoverflow.com" + $(element).attr("href")'
      },
      description:{
        selector:'.excerpt',
        expression:'$(element).text()'
      }
    },
    {
      type:'contact',
      query:'http://stackoverflow.com/users/filter?search={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.user-info .user-details a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.user-info .user-details a',
        expression:'"http://stackoverflow.com" + $(element).attr("href")'
      },
      description:{
        selector:'.user-info .user-details .reputation-score',
        expression:'$(element).attr("title")'
      },
      image:{
        selector:'.user-info .user-gravatar48 img',
        expression:'$(element).attr("src")'
      }
    }
  ]
}
