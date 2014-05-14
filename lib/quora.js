module.exports = {
  search:[
    {
      type:'answer',
      query:'https://www.quora.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.question_link',
        expression:'$(element).text()'
      },
      link:{
        selector:'.question_link',
        expression:'"https://www.quora.com" + $(element).attr("href")'
      },
      description:{
        selector:'.truncate_3',
        expression:'$(element).text().substr($(element).text().indexOf("—") + 2)'
      }
    }
  ]
};