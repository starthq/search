{
  search:[
    {
      type:'contact',
      query:'https://angel.co/search?type=people&q={{term}}',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'#search_item_list .title a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search_item_list .title a',
        expression:'$(element).attr("href")'
      },
      image:{
        selector:'#search_item_list img',
        expression:'$(element).attr("src")'
      }
    },
    {
      type:'organization',
      query:'https://angel.co/search?type=companies&q={{term}}',
      headers:{
        Accept:'text/html'
      },
      translate:'parseHTML(response)',
      name:{
        selector:'#search_item_list .title a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search_item_list .title a',
        expression:'$(element).attr("href")'
      }
    }
  ]
}
