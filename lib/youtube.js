{
  search:[
    {
      type:'video',
      query:'http://www.youtube.com/results?filters=video&search_query={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#search-results .yt-lockup-title > a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search-results .yt-lockup-title > a',
        expression:'"http://www.youtube.com" + $(element).attr("href")'
      },
      description:{
        selector:'#search-results .yt-lockup-content',
        expression:'$(element.querySelector(".yt-lockup-description")).text()'
      }
    }
  ]
}
