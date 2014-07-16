{
  search: [
    {
      type:'link',
      query:'https://foursquare.com/explore?mode=url&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.venueName a',
        expression:'element.textContent'
      },
      link:{
        selector:'.venueName a',
        expression:'"http://foursquare.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.venueAddress',
        expression:'element.textContent'
      }
    }
  ]
}
