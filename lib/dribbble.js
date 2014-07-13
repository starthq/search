{
  search: [
    {
      query:'https://dribbble.com/search?q={{term}}',
      type:'image',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'[data-picture]',
        expression:'element.dataset.alt + " [Shot]"'
      },
      link:{
        selector:'.dribbble-over',
        expression:'"https://dribbble.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.url',
        expression:'"by " + element.title'
      },
      icon:{
        selector:'[data-picture] img',
        expression:'element.getAttribute("src")'
      }
    },
    {
      query:'https://dribbble.com/search/users?q={{term}}',
      type:'link',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'[data-picture]',
        expression:'element.dataset.alt + " [Designer]"'
      },
      link:{
        selector:'.url',
        expression:'"https://dribbble.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.meta-skills',
        expression:'element.textContent'
      },
      icon:{
        selector:'.photo',
        expression:'element.getAttribute("src")'
      }
    }
  ]
}
