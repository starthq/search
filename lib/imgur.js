{
  search: [
    {
      type:'link',
      query:'http://imgur.com/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.posts .post img',
        expression: '$(element).attr("title")'
      },
      link:{
        selector:'.posts .post a',
        expression:'"https://imgur.com" + element.getAttribute("href")'
      }
    }
  ]
}   
