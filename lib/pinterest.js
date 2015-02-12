{
  search: [
    {
      type: 'image',
      query: 'https://www.pinterest.com/search/my_pins/?q={{term}}',
      translate: 'parseHTML(response)',
      name: {
        selector: '.pinWrapper .pinDescription',
        expression: 'element.textContent'
      },
      link: {
        selector: '.pinWrapper .pinHolder a',
        expression: '"https://www.pinterest.com" + element.getAttribute("href")'
      },      
      icon: {
        selector: '.pinWrapper .creditImg img',
        expression: 'element.getAttribute("src")'
      }
    },
    {
      type: 'image',
      query: 'https://www.pinterest.com/search/pins/?q={{term}}',
      translate: 'parseHTML(response)',
      name: {
        selector: '.pinWrapper .pinDescription',
        expression: 'element.textContent'
      },
      link: {
        selector: '.pinWrapper .pinHolder a',
        expression: '"https://www.pinterest.com" + element.getAttribute("href")'
      },      
      icon: {
        selector: '.pinWrapper .creditImg img',
        expression: 'element.getAttribute("src")'
      }
    },
    {
      type: 'contact',
      query: 'https://www.pinterest.com/search/people/?q={{term}}',
      translate: 'parseHTML(response)',
      name: {
        selector: '.item .username',
        expression: 'element.textContent'
      },
      link: {
        selector: '.item a.userWrapper',
        expression: '"https://www.pinterest.com" + element.getAttribute("href")'
      },      
      image: {
        selector: '.item .focusThumbContainer img',
        expression: 'element.getAttribute("src")'
      }
    },
    {
      type: 'project',
      query: 'https://www.pinterest.com/search/boards/?q={{term}}',
      translate: 'parseHTML(response)',
      name: {
        selector: '.item .title',
        expression: 'element.textContent'
      },
      description: {
        selector: '.item .fullname',
        expression: 'element.textContent'
      },      
      link: {
        selector: '.item a.boardLinkWrapper',
        expression: '"https://www.pinterest.com" + element.getAttribute("href")'
      }
    }
  ]
}
