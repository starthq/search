{
  search: [
    {
      type:'link',
      query:'http://sourceforge.net/directory/freshness:recently-updated/?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.project_info header a',
        expression:'element.textContent'
      },
      link:{
        selector:'.project_info header a',
        expression:'"http://sourceforge.net" + element.getAttribute("href")'
      },
      description:{
        selector:'.project_info p',
        expression:'element.textContent'
      }
    }
  ]
}
