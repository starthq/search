{
  search: [
    {
      type:'place',
      query:'http://www.yelp.com/search?find_desc={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.biz-name',
        expression:'element.textContent'
      },
      link:{
        selector:'.biz-name',
        expression:'"http://yelp.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.snippet',
        expression:'element.textContent'
      }
    }
  ]
}
