{
  search: [
    {
      type:'event',
      query:'https://www.eventbrite.com/d/local/{{term}}--events/',
      translate:'parseHTML(response)',
      name:{
        selector:'.event-card__header',
        expression:'element.textContent'
      },
      link:{
        selector:'.l-block-stack a',
        expression:'element.getAttribute("href")'
      },
      description:{
        selector:'p.text-body--faint',
        expression:'element.childNodes[1].textContent.trim() + " " + element.childNodes[3].textContent.trim()'
      }
    }
  ]
}