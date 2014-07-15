{
  search: [
    {
      type:'event',
      query:'https://www.eventbrite.com/directory?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.l-block-2 h3.event-card__header',
        expression:'element.textContent'
      },
      description:{
        selector:'.l-block-2 li:first-child span',
        expression:'element.textContent'
      },
      link:{
        selector:'.l-block-2 a:first-child',
        expression:'element.getAttribute("href")'
      }
    }
  ]
}
