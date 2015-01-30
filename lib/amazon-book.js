{
  search: [
    {
      type:'link',
      query:'http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Dstripbooks&field-keywords={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#result_0 .a-text-normal',
        expression:'$(element).text()'
      },
      link:{
        selector:'#result_0 .a-link-normal',
        expression:'"http://www.amazon.com/" + $(element).getAttribute("href")'
      },
      description:{
        selector:'#result_0 .a-text-normal',
        expression:'$(element).text()'
      }
    }
  ]
}