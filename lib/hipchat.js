{ 
	search: [  {   
		type: 'message',
		   query: 'https://vl.hipchat.com/search?q={{term}}&a=Search',
		   translate: 'parseHTML(response)',
		   name: {    
			selector: '.search-result .messageBlock div',
			    expression: 'element.textContent'   
		},
		   link: {    
			selector: '.search-result-header a',
			    expression: 'element.getAttribute("href")'   
		},
		   description: {    
			selector: '.time-ago',
			    expression: 'element.textContent'   
		}  
	} ]
}