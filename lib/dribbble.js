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
        expression:'element.dataset.alt'
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
    }
  ]
}
