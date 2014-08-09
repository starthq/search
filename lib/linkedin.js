{
  search:[
    {
      type:'contact',
      query:'https://touch.www.linkedin.com/li/v2/typeahead/search?types=mynetwork&keywords={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.values .text1',
        expression:'element'
      },
      link:{
        selector:'.values .link .id',
        expression:'"https://www.linkedin.com/profile/view?id=" + element'
      },
      description:{
        selector:'.values .text2',
        expression:'element'
      },
      image: {
        selector:'.values .picture',
        expression:'element.replace("shrink_80_80", "shrink_100_100")'
      }
    },
    {
      type:'message',
      query:'https://www.linkedin.com/inbox/search?keywords={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.detail-link',
        expression:'$(element).text()'
      },
      description:{
        selector:'.not-empty',
        expression:'$(element).text()'
      },
      link:{
        selector:'.detail-link',
        expression:'"http://www.linkedin.com/" + $(element).attr("href")'
      }
    }
  ]
}
