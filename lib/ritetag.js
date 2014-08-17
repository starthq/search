{
  name:'RiteTag',
  search:[
    {
      type:'topic',
      query:'https://ritetag.com/hashtag-directory?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#MyReports a',
        expression:'"#" + $(element).text()'
      },
      link:{
        selector:'#MyReports a',
        expression:'"https://ritetag.com/" + $(element).attr("href")'
      }
    }
  ]
}
