{
search:[
    {
      type:'place',
      query:'https://www.google.com/maps/search/{{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.cards-categorical-list-scrollbox .cards-categorical-list-item .cards-categorical-list-item-title',
        expression:'$(element).text()'
      },
      link:{
        selector:'.cards-categorical-list-scrollbox .cards-categorical-list-item',
        expression:'"https://www.google.com/maps/place/{{term}}/data=!3m1!4b1!4m5!1m2!2m1!1s{{term}}!3m1!1s" + $(element).attr("data-entity-featureid")'
      },
      description:{
        selector:'.cards-categorical-list-scrollbox .cards-categorical-list-item .cards-categorical-list-item-address',
        expression:'$(element).text()'
      }
    }
  ]
}
