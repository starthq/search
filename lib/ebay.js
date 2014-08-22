{
  search: [
    {
      query:'http://www.ebay.com/sch/i.html?_nkw={{term}}',
      type:'link',
      translate:'parseHTML(response)',
      name:{
        selector:'.lvresult .lvtitle a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.lvresult .lvtitle a',
        expression:'"https://ebay.com" + $(element).attr("href")'
      },
      description:{
        selector:'.lvresult .lvprice',
        expression:'$(element).text()'
      }
    }
  ]
}
