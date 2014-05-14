{
  search:[
    {
      query:'http://www.versioneye.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.search-item a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.search-item a',
        expression:'"https://www.versioneye.com" + $(element).attr("href")'
      },
      description:{
        selector:'.search-item .meta-text-small',
        expression:'$(element).text()'
      }
    }
  ]
}
