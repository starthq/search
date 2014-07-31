{
  search:[
    {
      type:'link',
      query:'https://soundcloud.com/search/people?q={{term}}',
      translate:'parseHTML(response)',
      name: {
        selector:'#artistResults .artistsWithInfo .artist strong',
        expression:'element.textContent'
      },
      description: {
        selector:'#artistResults .artistsWithInfo .bio',
        expression:'element.textContent'
      },
      link: {
        selector:'#artistResults .artistsWithInfo .artist',
        expression:'"https://soundcloud.com" + element.getAttribute("href")'
      }
    }
  ]
}	
