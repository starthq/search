{
  search:[
    {
      type:'file',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.file h4',
        expression:'$(element).text()'
      },
      description:{
        selector:'.file p',
        expression:'$(element).text()'
      },
      link:{
        selector:'.file a.ui-link-inherit',
        expression:'$(element).attr("href")'
      }
    },
    {
      type:'folder',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.folder',
        expression:'$(element).text()'
      },
      description:{
        selector:'.folder',
        expression:'$(element).text()'
      },
      link:{
        selector:'.folder a.ui-link-inherit',
        expression:'"https://www.dropbox.com" + $(element).attr("href")'
      }
    }
  ]
}
