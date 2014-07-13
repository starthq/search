{
  search: [
    {
      type:'answer',
      query:'http://en.wikipedia.org/wiki/Special:Search?search={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.firstHeading span',
        expression:'element.textContent'
      },
      link:{
        selector:'.selected a',
        expression:'"https://wikipedia.org" + element.getAttribute("href")'
      },
      description:{
        selector:'.mw-content-ltr',
        expression:'element.textContent'
      }
    }
  ]
}
