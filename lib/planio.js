{
  search: [
    {
      type:'link',
      query:'https://agilestaging.plan.io/search?q={{term}}&scope=all&all_words=&all_words=1&titles_only=&issues=1&news=1&documents=1&changesets=1&wiki_pages=1&messages=1&projects=1&contacts=1&crm_faqs=1&crm_templates=1',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results dt a',
        expression:'element.textContent'
      },
      link:{
        selector:'#search-results dt a',
        expression:'"https://agilestaging.plan.io" + element.getAttribute("href")'
      },
      description:{
        selector:'#search-results dd .description',
        expression:'element.textContent'
      }
    },
    {
      type:'organization',
      query:'https://agilestaging.plan.io/companies?name={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'table.list tr td.checkbox+td a',
        expression:'element.textContent'
      },
      link:{
        selector:'table.list tr td.checkbox+td a',
        expression:'"https://agilestaging.plan.io" + element.getAttribute("href")'
      },
      description:{
        selector:'table.list tr td.checkbox+td a',
        expression:'element.textContent'
      }
    }

  ]
}
