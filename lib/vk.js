{
  search: [
    {
      type:'link',
      query:'http://vk.com/search?c%5Bq%5D={{term}}&c%5Bsection%5D=audio',
      translate:'parseHTML(response)',
      name:{
        selector:'#results .audio td .title_wrap',
        expression:'element.textContent'
      },
      link:{
        selector:'#results .audio td .title_wrap b a',
        expression:'"http://m.vk.com" + element.getAttribute("href")'
      }
    },
    {
      type: 'contact',
      query:'http://vk.com/search?c%5Bq%5D={{term}}&c%5Bsection%5D=people',
      translate:'parseHTML(response)',
      name:{
        selector:'#results .people_row .info .name',
        expression:'element.textContent'
      },
      link:{
        selector:'#results .people_row .info .name a',
        expression:'"http://m.vk.com" + element.getAttribute("href")'
      }
    }
  ]
}
