{
  search:[
    {
      type:'video',
      query:'https://vimeo.com/search/sort:relevant/format:detail?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#browse_content li .data .title',
        expression:'$(element).text()'
      },
			description:{
				selector:'#browse_content li .data .description',
        expression:'$(element).text()'
			},
      link:{
        selector:'#browse_content li a',
        expression:'"http://www.vimeo.com" + $(element).attr("href")'
      },
			icon:{
				selector:'#browse_content li a img',
        expression:'element.getAttribute("src")'
			}
    }
  ]
}