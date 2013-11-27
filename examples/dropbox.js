{
  search:[
    {
      type: 'link',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.file a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.file h4',
        expression:'element.textContent'
      },
      description:{
        selector:'.file p',
        expression:'element.textContent'
      },
      link:{
        selector:'.file a.ui-link-inherit',
        expression:'element.getAttribute("href")'
      }
    }
  ]
}
