{
  search: [
    {
      type: 'message',
      query:'https://mail.google.com/mail/h/aez8fwf893g7/?s=q&q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.ts',
        expression:'app.url|icons'
      },
      name:{
        selector:'.ts',
        expression:'element.childNodes[1].textContent.trim() || element.childNodes[2].textContent'
      },
      description:{
        selector:'.ts',
        expression:'element.childNodes[element.childNodes[1].textContent.trim() ? 2 : 4].textContent.substr(2)'
      },
      link:{
        selector:'.ts',
        expression:'"https://mail.google.com/mail/u/0/#search/" + term + "/" + $(element.parentNode).attr("href").substr(element.parentNode.getAttribute("href").indexOf("th=") + "th=".length)'
      }
    }
  ]
}
