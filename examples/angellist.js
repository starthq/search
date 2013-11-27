{
  search: [
    {
      query:'https://angel.co/search?q={{term}}',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      icon:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'app.url|icons'
      },
      name:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'element.textContent'
      },
      link:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'element.getAttribute("href")'
      }
    }
  ]
}
