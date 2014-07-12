{
  search:[
    {
      type: 'link',
      query:'http://www.reddit.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'.thing a.thumbnail',
        expression:'app.url|icons'
      },
      name:{
        selector:'.thing .entry a.title',
        expression:'$(element).text()'
      },
      description:{
        selector:'.thing .entry .domain a',
        expression:'$(element).text()'
      },
      link:{
        selector:'.thing .flat-list .first a',
        expression:'$(element).attr("href")'
      }
    }
  ]
}
