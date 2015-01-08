{
  search: [
    {
      type:'event',
      query:'http://lanyrd.com/search/?q={{term}}&type=conference',
      translate:'parseHTML(response)',
      name:{
        selector:'.s-conference.s-result > h3 > a',
        expression:'element.textContent'
      },
      description:{
        selector:'.s-conference.s-result',
        expression:'element.childNodes[3].childNodes[1].textContent+element.childNodes[3].childNodes[5].textContent+" || "+element.childNodes[5].textContent'
      },
      link:{
        selector:'.s-conference.s-result a',
        expression:'"http://lanyrd.com"+element.getAttribute("href")'
      }
    }
  ]
}
