{
  search:[
    {
      type:'image',
      query:'https://www.flickr.com/search/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.search-photos-collection-view .display-item-tile figure .meta-bar .title a',
        expression:'element.textContent'
      },
	  description:{
	    selector:'.search-photos-collection-view .display-item-tile figure .meta-bar .attribution a',
        expression:'"by " + element.textContent'
	  },
      link:{
        selector:'.search-photos-collection-view .display-item-tile figure .ui-display-mask a',
        expression:'"https://www.flickr.com" + element.getAttribute("href")'
      }
	  ,
      image:{
        selector:'.search-photos-collection-view .display-item-tile figure .ui-display-mask a img',
        expression:'element.getAttribute("src")'
      }
    },
    {
      type:'contact',
      query:'https://www.flickr.com/search/people/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#ResultsContainer .PeopleResults .Who a',
        expression:'element.textContent'
      },
	  description:{
	    selector:'#ResultsContainer .PeopleResults .Who p b',
        expression:'element.textContent'
	  },
      link:{
        selector:'#ResultsContainer .PeopleResults .Who a',
        expression:'"https://www.flickr.com" + element.getAttribute("href")'
      },
	  image:{
	    selector:'#ResultsContainer .PeopleResults .Icon a img',
	    expression:'element.getAttribute("src")'
	  }
    },
    {
      type:'group',
      query:'https://www.flickr.com/search/groups/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#ResultsContainer .GroupsResults .Meta H2 a',
        expression:'element.textContent'
      },
	  description:{
	    selector:'#ResultsContainer .GroupsResults .Meta .About',
        expression:'element.textContent.substring(0, $(element).text().length - 14)'
	  },
      link:{
        selector:'#ResultsContainer .GroupsResults .Meta H2 a',
        expression:'"https://www.flickr.com" + element.getAttribute("href")'
      }
    }
  ]
}
