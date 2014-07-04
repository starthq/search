{
  search:[
    {
      type:'web',
      query:'https://www.google.com/search?q={{term}}',
      headers: {
        'User-Agent':'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800)'
      },
      translate:'parseHTML(response)',
      icon:{
        selector:'#search .g .r a',
        expression:'"https://getfavicon.appspot.com/" + $(element).attr("href")'
      },
      name:{
        selector:'#search .g .r a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search .g .r a',
        expression:'$(element).attr("href")'
      },
      description:{
        selector:'#search .g .st',
        expression:'$(element).text()'
      }
    }
  ]
}
