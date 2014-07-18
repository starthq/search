{
  search:[
    {
      type:'link',
      query:'http://www.last.fm/search?type=artist&q={{term}}',
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
        expression:'"http://last.fm" + element.getAttribute("href")'
      }
    },
    {
      type:'link',
      query:'http://www.last.fm/search?type=album&q={{term}}',
      translate:'parseHTML(response)',
      name: {
        selector:'#albumResults .albums .resContainer',
        expression:'element.childNodes[4].textContent + " - " + element.childNodes[1].textContent'
      },
      description: {
        selector:'#albumResults .albums .stats',
        expression:'element.textContent'
      },
      link: {
        selector:'#albumResults .albums .summary',
        expression:'"http://last.fm" + element.getAttribute("href")'
      }
    }
  ]
}
