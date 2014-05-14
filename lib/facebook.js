{
	search : [{
			type : 'message',
			query : 'https://touch.facebook.com/messages/?q={{term}}',
			translate : 'parseHTML(response)',
			name : {
				selector : '.item.tall .title > strong',
				expression : 'element.textContent'
			},
			description : {
				selector : '.item.tall .preview > .snippet',
				expression : 'element.textContent'
			},
			link : {
				selector : '.item.tall a.touchable',
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
			link : {
				selector : '.itemWithAction > a.touchable.primary',
				expression : '"https://www.facebook.com" + element.getAttribute("href")'
			}
		}
	]
}
