{
  search:[
    {
      type:'video',
      query:'https://vimeo.com/search/sort:relevant/format:detail?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#browse_content li .data .title',
        expression:'element.textContent'
      },
	  description:{
	    selector:'#browse_content li .data .description',
        expression:'element.textContent'
	  },
      link:{
        selector:'#browse_content li .title a',
        expression:'"http://www.vimeo.com" + element.getAttribute("href")'
      }
    },
	{
      type:'contact',
      query:'https://vimeo.com/search/people/sort:relevant/format:detail?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#browse_content .browse_people li .data .title',
        expression:'element.textContent'
      },
	  description:{
	    selector:'#browse_content .browse_people li .data .description',
        expression:'element.textContent'
	  },
      link:{
        selector:'#browse_content .browse_people li .title a:nth-child(1)',
        expression:'"http://www.vimeo.com" + element.getAttribute("href")'
      },
	  image:{
	    selector:'#browse_content .browse_people li a img',
	    expression:'element.getAttribute("src")'
	  }
    },
	{
      type:'group',
      query:'https://vimeo.com/search/groups/sort:relevant/format:detail?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#browse_content li .data .title',
        expression:'element.textContent'
      },
	  description:{
	    selector:'#browse_content li .data .description',
        expression:'element.textContent'
	  },
      link:{
        selector:'#browse_content li .title a',
        expression:'"http://www.vimeo.com" + element.getAttribute("href")'
      }
    },
	{
      type:'video',
      query:'https://vimeo.com/search/channels/sort:relevant/format:detail?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#browse_content li .data .title',
        expression:'"Channel:" + element.textContent'
      },
	  description:{
	    selector:'#browse_content li .data .description',
        expression:'element.textContent'
	  },
      link:{
        selector:'#browse_content li .title a',
        expression:'"http://www.vimeo.com" + element.getAttribute("href")'
      }
    }
  ]
}
