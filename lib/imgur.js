{
  search:[
    {
      query:'http://imgur.com/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.posts .post img',
        expression:'$(element).attr("title").substr(0, $(element).attr("title").indexOf("<"))'
      },
      link:{
        selector:'.posts .post a',
        expression:'"https://imgur.com" + $(element).attr("href")'
      },
      description:{
        selector:'.posts .post img',
        expression:'$($(element).attr("title").substr($(element).attr("title").indexOf("<"))).text()'
      }
    }
  ]
}