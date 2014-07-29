{
  search: [
    {
      type: 'contact',
      query:'//websta.me/search/{{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.users .profimg',
        expression:'element.getAttribute("src")'
      },
      name:{
        selector:'.users .username',
        expression:'element.textContent'
      },
      description:{
        selector:'.users .fullname',
        expression:'element.textContent'
      }
      link:{
        selector:'.users .username',
        expression:'"https://instagram.com" + element.textContent'
      }
    },
    {
      type: 'image',
      query:'//websta.me/tag/{{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.mainimg img',
        expression:'$(element).getAttribute("src")'
      },
      description:{
        selector:'.comment_body',
        expression:'$(element).text()'
      }
      link:{
        selector:'.mainimg img',
        expression:'"https://instagram.com"'
      }
    }
  ]
}
