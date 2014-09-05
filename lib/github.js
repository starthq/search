{
  search:[
    {
      query:'https://github.com/search?q={{term}}',
      type:'project',
      translate:'parseHTML(response)',
      name:{
        selector:'.repo-list-name a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.repo-list-name a',
        expression:'"https://github.com" + $(element).attr("href")'
      },
      description:{
        selector:'.repo-list-description',
        expression:'$(element).text()'
      }
    },
    {
      query:'https://github.com/search?q={{term}}&type=Code',
      type:'file',
      translate:'parseHTML(response)',
      name:{
        selector:'.code-list-item p',
        expression:'$(element).text()'
      },
      link:{
        selector:'.code-list-item .file-box .blob-num a',
        expression:'"https://github.com" + $(element).attr("href")'
      }
    },
    {
      query:'https://github.com/search?q={{term}}&type=Issues',
      type:'task',
      translate:'parseHTML(response)',
      name:{
        selector:'.issue-list-item .title a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.issue-list-item .title a',
        expression:'"https://github.com" + $(element).attr("href")'
      },
      description:{
        selector:'.issue-list-item .description',
        expression:'$(element).text()'
      }
    },
    {
      query:'https://github.com/search?q={{term}}&type=Users',
      type:'contact',
      translate:'parseHTML(response)',
      name:{
        selector:'.user-list-item .user-list-info > a',
        expression:'$(element).text()'
      },
      image:{
        selector : '.user-list-item .avatar',
   expression : '$(element).attr("src")'
      },
      link:{
        selector:'.user-list-item .user-list-info > a',
        expression:'"https://github.com" + $(element).attr("href")'
      },
      description:{
        selector:'.user-list-item .user-list-info em',
        expression:'$(element).text()'
      }
    }
  ]
}
