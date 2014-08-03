{
  search: [
    {
      type:'link',
      query:'http://superuser.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.result-link span a',
        expression:'element.textContent'
      },
      link:{
        selector:'.result-link span a',
        expression:'"http://superuser.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.excerpt',
        expression:'element.textContent'
      }
    }
  ]
}
