{
	search : [{
	    type : 'message',
	    query : 'https://touch.facebook.com/messages/?q={{term}}',
	    translate : 'parseHTML(response)',
	    name : {
	      selector : 'header > h3 > strong',
	      expression : 'element.textContent'
	    },
	    description : {
	      selector : 'header > h3 > span',
	      expression : 'element.textContent'
	    },
	    link : {
	      selector : '._5b6s',
	      expression : '"https://www.facebook.com" + element.getAttribute("href")'
    	   }
	  },
		{
			type : 'contact',
			query : 'https://touch.facebook.com/friends/?q={{term}}',
			translate : 'parseHTML(response)',
			name : {
				selector : '.itemWithAction .content > .title > strong',
				expression : 'element.textContent'
			},
      image : {
				selector : '.itemWithAction > a.touchable.primary',
				expression : '"https://graph.facebook.com" + element.getAttribute("href").replace("?refid=5","").replace("profile.php?id=","").replace("&refid=5","") + "/picture?type=square&width=100&height=100 "'
      },
			link : {
				selector : '.itemWithAction > a.touchable.primary',
				expression : '"https://www.facebook.com" + element.getAttribute("href")'
			}
		}
	]
}
