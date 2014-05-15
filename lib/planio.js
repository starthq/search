{
  search: [
    {
      type:'message',
      query:'https://accounts.plan.io/login?path=/search?q={{term}}%26scope=all%26all_words=1%26issues=1%26messages=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://accounts.plan.io/login?path=" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    },
    {
      type:'file',
      query:'https://accounts.plan.io/login?path=/search?q={{term}}%26scope=all%26all_words=1%26documents=1%26changesets=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://accounts.plan.io/login?path=" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    },
    {
      type:'contact',
      query:'https://accounts.plan.io/login?path=/search?q={{term}}%26scope=all%26all_words=1%26contacts=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://accounts.plan.io/login?path=" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    },
    {
      type:'organization',
      query:'https://accounts.plan.io/login?path=/search?q={{term}}%26scope=all%26all_words=1%26companies=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://accounts.plan.io/login?path=" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    },
    {
      type:'answer',
      query:'https://accounts.plan.io/login?path=/search?q={{term}}%26scope=all%26all_words=1%26crm_faqs=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://accounts.plan.io/login?path=" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    },
    {
      type:'link',
      query:'https://accounts.plan.io/login?path=/search?q={{term}}%26scope=all%26all_words=1%26wiki_pages=1%26news=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://accounts.plan.io/login?path=" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    }
  ]
}
