module.exports = {
  search:[
    {
      query:'https://coderwall.com/p/search?scope=everything&search={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.protip a.title',
        expression:'$(element).text()'
      },
      link:{
        selector:'.protip a.title',
        expression:'"https://coderwall.com" + $(element).attr("href")'
      }
    }
  ]
};