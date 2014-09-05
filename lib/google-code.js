{
	search:[
		{
			type:'link',
			query:'https://code.google.com/hosting/search?q={{term}}',
			translate:'parseHTML(response)',
			name:{
				selector:'#serp td:nth-child(2) > a',
				expression:'element.textContent'
			},
			link:{
				selector:'#serp td:nth-child(2) > a',
				expression:'"https://code.google.com"+element.getAttribute("href")'
			},
			icon:{
				selector:'#serp td:nth-child(1) img',

				// Google code refers to some icons via full path and to others via relative.
				// We need to make sure that full path is returned.
				expression:'(element.getAttribute("src").substring(0,1) == "/") ? "https://code.google.com"+element.getAttribute("src") : element.getAttribute("src")'
			}
		}
	]
}
