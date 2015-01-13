{
  search:[
    {
      type:'image',
      query:'http://imgur.com/search/score?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.image-list-link img',
        expression:'element.getAttribute("src")'
      },
      name:{
        selector:'.hover p',
        expression:'element.textContent'
      },
      link:{
        selector:'.image-list-link',
        expression:'"http://imgur.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.image-list-link',
        expression:'"http://imgur.com" + element.getAttribute("href")'
      }
    },
    {
      type:'image',
      query:'http://imgur.com/search/relevance?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.image-list-link img',
        expression:'element.getAttribute("src")'
      },
      name:{
        selector:'.hover p',
        expression:'element.textContent'
      },
      link:{
        selector:'.image-list-link',
        expression:'"http://imgur.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.image-list-link',
        expression:'"http://imgur.com" + element.getAttribute("href")'
      }
    }
  ]
}