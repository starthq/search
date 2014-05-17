{
  search: [
    {
      type:'link',
      query:'https://www.kickstarter.com/projects/search?term={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'#projects_list .project-card h6 a',
        expression:'element.textContent'
      },
      link:{
        selector:'#projects_list .project-card h6 a',
        expression:'"https://www.kickstarter.com" + element.getAttribute("href")'
      },
      description:{
        selector:'#projects_list .project-card .project-blurb',
        expression:'element.textContent'
      }
    }
  ]
}
