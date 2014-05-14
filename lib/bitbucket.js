{
  search:[
    {
      query:'https://bitbucket.org/repo/all/relevance?name={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.repo-summary .repo-link',
        expression:'$(element).text()'
      },
      link:{
        selector:'.repo-summary .repo-link',
        expression:'"https://bitbucket.org" + $(element).attr("href")'
      },
      description:{
        selector:'.repo-summary p',
        expression:'$(element).text()'
      }
    }
  ]
}
