{
  search:[
    {
      type: 'post',
      query:'https://twitter.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.show-popup-with-id',
        expression:'element.textContent.trim()'
      },
      description:{
        selector:'.tweet-text',
        expression:'element.textContent.trim()'
      },
      link:{
        selector:'.tweet-timestamp',
        expression:'"https://twitter.com" + element.getAttribute("href")'
      }
    },
    {
      type: 'users',
      query:'https://twitter.com/search?mode=users&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.content-main .fullname',
        expression:'element.textContent.trim()'
      },
      description:{
        selector:'.bio',
        expression:'element.textContent.trim()'
      },
      link:{
        selector:'a.account-group',
        expression:'"https://twitter.com" + $(element).attr("href")'
      }
    },
    {
      type: 'contacts',
      query:'https://twitter.com/search?f=follows&mode=users&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.content-main .fullname',
        expression:'element.textContent.trim()'
      },
      description:{
        selector:'.bio',
        expression:'element.textContent.trim()'
      },
      link:{
        selector:'a.account-group',
        expression:'"https://twitter.com" + $(element).attr("href")'
      }
    },
    {
      type: 'photos',
      query:'https://twitter.com/search?mode=photos&v=stream&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.show-popup-with-id',
        expression:'element.textContent.trim()'
      },
      description:{
        selector:'.tweet-text',
        expression:'element.textContent.trim()'
      },
      link:{
        selector:'.tweet-timestamp',
        expression:'"https://twitter.com" + element.getAttribute("href")'
      }
    }
  ]
}