{
  search:[
    {
      type:'message',
      // https://mail.google.com/mail/u/1/h/aez8fwf893g7/?s=q&q=
      query:'https://mail.google.com/mail/h/aez8fwf893g7/?s=q&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.ts',
        expression:'$(element.childNodes[1]).text().trim() || $(element.childNodes[2]).text()'
      },
      description:{
        selector:'.ts',
        expression:'$(element.childNodes[$(element.childNodes[1]).text().trim() ? 2 : 4]).text().substr(2)'
      },
      link:{
        selector:'.ts',
        expression:'t = $(element).parent().attr("href"); "https://mail.google.com/mail/u/0/#search/" + term + "/" + t.substr(t.indexOf("th=") + "th=".length)'
      }
    },{
      type : 'file',
      query : 'https://mail.google.com/mail/u/0/h/?s=q&q=filename:{{term}}',
      translate : 'parseHTML(response)',
      name : {
        selector : '.ts',
        expression : '$(element.childNodes[1]).text().trim() || $(element.childNodes[2]).text()'
      },
      description:{
        selector:'.ts',
        expression:'$(element.childNodes[$(element.childNodes[1]).text().trim() ? 2 : 4]).text().substr(2)'
      },
      link : {
        selector : '.ts',
	expression : 't = $(element).parent().attr("href"); "https://mail.google.com/mail/u/0/#search/filename:" + term + "/" + t.substr(t.indexOf("th=") + "th=".length)'
      }
    }
  ]
}
