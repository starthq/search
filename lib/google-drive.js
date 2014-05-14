module.exports = {
  search:[
    {
      type:'file',
      query:'https://drive.google.com/m?query={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.docblock a',
        expression:'$(element).text()'
      },
      description:{
        selector:'.docblock span',
        expression:'$(element).text()'
      },
      link:{
        selector:'.docblock a',
        expression:'$(element).attr("href").replace("/m?", "/ccc?").replace("/mobilepresent?", "?")'
      }
    }
  ]
};
