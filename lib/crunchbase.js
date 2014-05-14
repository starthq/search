module.exports = {
  search:[
    {
      query:'http://www.crunchbase.com/search?query={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.search_result_name a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.search_result_name a',
        expression:'"http://www.crunchbase.com" + $(element).attr("href")'
      },
      description:{
        selector:'.search_result_preview',
        expression:'$(element).text()'
      },
      icon:{
        selector:'.search_result',
        expression:'$(element.childNodes[1].firstChild).attr("src") || (app.url|icons)'
      }
    }
  ]
};