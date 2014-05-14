module.exports = {
  search:[
    {
      type:'message',
      query:'http://www.linkedin.com/inbox/messages/search?keywords={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'li.inbox-item p.subject a',
        expression:'$(element).text()'
      },
      description:{
        selector:'li.inbox-item span.participants a',
        expression:'$(element).text()'
      },
      link:{
        selector:'li.inbox-item p.subject a',
        expression:'"http://www.linkedin.com/" + $(element).attr("href")'
      }
    }
  ]
};