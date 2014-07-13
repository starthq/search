{
  search: [
    {
      type:'article',
      query:'http://en.wikipedia.org/w/index.php?title=Special%3ASearch&profile=default&search={{term}}&fulltext=Search',
      translate:'parseHTML(response)',
      name:{
        selector:'.mw-search-result-heading a',
        expression:'element.textContent'
      },
      link:{
        selector:'.mw-search-result-heading a',
        expression:'"https://wikipedia.org" + element.getAttribute("href")'
      },
      description:{
        selector:'.searchresult',
        expression:'element.textContent'
      }
    }
  ]
}
