{
  search: [
    {
      type:'link',
      query:'https://codebreak.com/git/search/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.pg-git-search-tbl-width a',
        expression:'element.textContent'
      },
      link:{
        selector:'.pg-git-search-tbl-width a',
        expression:'"http://codebreak.com"+element.getAttribute("href")'
      },
      description:{
        selector:'.pg-git-search-tbl-width p',
        expression:'element.textContent'
      }
    }
  ]
}