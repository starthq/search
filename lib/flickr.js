{
  search:[
    {
      type:'image',
      query:'https://secure.flickr.com/search/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.meta .title a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.meta .title a',
        expression:'"https://secure.flickr.com" + $(element).attr("href")'
      },
      description:{
        selector:'.meta .owner',
        expression:'$(element).text()'
      }
    }
  ]
}
