var providers = {
  'https://mail.google.com/':[
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
        expression:'"https://mail.google.com/mail/u/0/#search/" + term + "/" + element.parentNode.getAttribute("href").substr(element.parentNode.getAttribute("href").indexOf("th=") + "th=".length)'
      }
    }
  ],
  'https://github.com/':[
    {
      query:'https://github.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.repolist-name a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.repolist-name a',
        expression:'element.textContent'
      },
      link:{
        selector:'.repolist-name a',
        expression:'"https://github.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.description',
        expression:'element.textContent'
      }
    }
  ],
  'https://www.quora.com/':[
    {
      type: 'answer',
      query:'https://www.quora.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.question_link',
        expression:'app.url|icons'
      },
      name:{
        selector:'.question_link',
        expression:'element.textContent'
      },
      link:{
        selector:'.question_link',
        expression:'"https://www.quora.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.truncate_3',
        expression:'element.textContent.substr(element.textContent.indexOf("—") + 2)'
      }
    }
  ],
  'http://stackoverflow.com/':[
    {
      type: 'answer',
      query:'http://stackoverflow.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.result-link a',
        expression:'app.url|icons'
      },
      name:{
        selector:'.result-link a',
        expression:'element.textContent'
      },
      link:{
        selector:'.result-link a',
        expression:'"http://stackoverflow.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.excerpt',
        expression:'element.textContent'
      }
    }
  ],
  'https://angel.co/':[
    {
      query:'https://angel.co/search?q={{term}}',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      icon:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'app.url|icons'
      },
      name:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'element.textContent'
      },
      link:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'element.getAttribute("href")'
      }
    }
  ],
  'http://www.youtube.com/':[
    {
      type: 'video',
      query:'http://www.youtube.com/results?filters=video&search_query={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'#search-results .yt-uix-tile-link',
        expression:'app.url|icons'
      },
      name:{
        selector:'#search-results .yt-uix-tile-link',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results .yt-uix-tile-link',
        expression:'"http://www.youtube.com" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results .yt-lockup2-content',
        expression:'element.querySelector(".yt-lockup2-description").textContent'
      }
    }
  ]
};
