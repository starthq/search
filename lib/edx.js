{
  search:[
    {
      query:'https://www.edx.org/course?search_query={{term}}',
      type:'link',
      translate:'parseHTML(response)',
      name:{
        selector:'.course-code',
        expression:'$(element).text()'
      },
      link:{
        selector:'.course-link',
        expression:'"http://www.edx.org" + $(element).attr("href")'
      },
      description:{
        selector:'.course-card .title',
        expression:'$(element).text()'
      }
    }
  ]
}