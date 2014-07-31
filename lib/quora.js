{
  search: [
    {
      type:'answer',
      query:'http://www.quora.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.matched_term',
        expression:'$(element).text()'
      },
      link:{
        selector:'.question_link',
        expression: '"http://quora.com" + element.getAttribute("href")'
      },
      description:{
        selector:'.search_result_snippet',
        expression:'element.textContent'
      }
    }
  ]
}
