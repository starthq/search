{
  search:[
    {
      type: 'post',
      query:'https://twitter.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.show-popup-with-id',
        expression:'element.textContent.trim()'
      },
      description:{
        selector:'.tweet-text',
        expression:'element.textContent.trim()'
      },
      link:{
        selector:'.tweet-timestamp',
        expression:'"https://twitter.com" + $(element).attr("href")'
      }
    }
  ]
}
