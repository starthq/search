module.exports = {
  name:'StartHQ',
  url:'https://starthq.com/',
  search:[
    {
      type:'app',
      query:'https://starthq.com/apps/?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'h4 .favicon',
        expression:'$(element).attr("src")'
      },
      name:{
        selector:'h4 a:nth-child(2)',
        expression:'$(element).text()'
      },
      link:{
        selector:'h4 a:nth-child(2)',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'p',
        expression:'$(element).text()'
      }
    }
  ]
};
