{
  search: [
    {
      type:'file',
      query:'http://www.slideshare.net/search/slideshow?searchfrom=header&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.searchResults .searchResultMeta a',
        expression:'element.textContent'
      },
      link:{
        selector:'.searchResults .searchResultMeta a',
        expression:'"http://www.slideshare.net" + element.getAttribute("href")'
      },
      description:{
        selector:'.searchResults .searchResultMeta .description',
        expression:'element.textContent'
      }
    }
  ]
}
