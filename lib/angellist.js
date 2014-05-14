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
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'$(element).text()'
      },
      description:{
        selector:'#search_item_list .type',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'$(element).attr("href")'
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
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'$(element).text()'
      },
      description:{
        selector:'#search_item_list .type',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search_item_list .title a:nth-child(2)',
        expression:'$(element).attr("href")'
      }
    }
  ]
}
