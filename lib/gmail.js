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
    },
    {
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
    },
    {
      type:'contact',
      query:'https://mail.google.com/mail/u/0/x/1et4ss3iccqf8-/f/?v=amr&scq={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#amf a',
        expression:'$(element).text().trim()'
      },
      link:{
        selector:'#amf a',
        expression:'url = $(element).attr("href"); a = url.substr(url.indexOf("&c=") + 3); "https://www.google.com/contacts/u/0/#contact/" + a.substr(0, a.indexOf("&"))'
      },
      image:{
        selector:'#amf img',
        expression:'$(element).attr("src").replace("sz=24","sz=100")'
      }
    },
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
