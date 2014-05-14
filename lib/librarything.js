module.exports = {
  search:[
    {
      type:'book',
      query:'http://www.librarything.com/ajax_newsearch.php?search={{term}}&searchtype=work',
      translate:'parseHTML(response)',
      name:{
        selector:'.msg .item',
        expression:'$(element.firstChild).text()'
      },
      link:{
        selector:'.msg .item',
        expression:'"http://www.librarything.com" + $(element.firstChild).attr("href")'
      },
      description:{
        selector:'.msg .si',
        expression:'$(element).text()'
      }
    }
  ]
};
