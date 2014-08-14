{
  search: [
    {
      type:'event',
      query:'https://www.google.com/calendar/feeds/default/private/full?futureevents=true',
      translate:'parseXML(response)',
      name:{
        selector:'//entry/title',
        expression:'element.textContent'
      },
      link:{
        selector:"//entry/link[@type='text/html']",
        expression:'element.getAttribute("href")'
      },
      description: {
        selector:"//entry/*[local-name(.) = 'when']",
        expression:'element.getAttribute("startTime") + " - " + element.getAttribute("endTime")'
      },
      filter:'result.name.toLowerCase().indexOf(term.toLowerCase()) != -1'
    }
  ]
}
