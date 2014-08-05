{
  search: [
    {
      type:'link',
      query:'https://feedly.com/index.html#explore%2F{{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.vignette a',
        expression:'element.textContent'
      },
      link:{
        selector:'.vignette a',
        expression:'element.getAttribute("href")'
      },
      description:{
        selector:'.vignette a',
        expression:'element.textContent'
      }
    }
  ]
}