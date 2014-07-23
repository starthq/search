{
  search: [
    {
      type:'image',
      query:'https://www.behance.net/search?search={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.cover-name a',
        expression:'element.textContent'
      },
      link:{
        selector:'.cover-name a',
        expression:'element.getAttribute("href")'
      },
			description:{
				selector: '.cover-fields a',
				expression:'element.textContent'
			}
    }
  ]
}