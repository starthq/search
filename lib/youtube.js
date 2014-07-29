{
  search:[
    {
      type:'video',
      query:'http://www.youtube.com/results?filters=video&search_query={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.yt-lockup-title > a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.yt-lockup-title > a',
        expression:'"http://www.youtube.com" + $(element).attr("href")'
      },
      description:{
        selector:'.yt-lockup-content',
        expression:'$(element.querySelector(".yt-lockup-description")).text()'
      }
    }
  ]
}
