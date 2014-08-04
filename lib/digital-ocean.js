{
  search: [
    {
      type: 'tutorial',
      query: 'https://www.digitalocean.com/community/search?primary_filter=tutorials&query={{term}}',
      translate: 'parseHTML(response)',
      name: {
        selector: '#filter-objects .tutorial h3 a',
        expression: '$(element).text()'
      },
      link: {
        selector: '#filter-objects .tutorial h3 a',
        expression: '$(element).attr("href")'
      },
      description: {
        selector: '#filter-objects .tutorial .meta',
        expression: '[$(element).find(".author").text().trim(), $(element).find(".answers").text(), $(element).find(".time").text().trim()].join(" - ")'
      }
    },
    {
      type: 'question',
      query: 'https://www.digitalocean.com/community/search?primary_filter=questions&query={{term}}',
      translate: 'parseHTML(response)',
      name: {
        selector: '#filter-objects .question h3 a',
        expression: '$(element).text()'
      },
      link: {
        selector: '#filter-objects .question h3 a',
        expression: '$(element).attr("href")'
      },
      description: {
        selector: '#filter-objects .question .meta',
        expression: '[$(element).find(".author").text().trim(), $(element).find(".answers").text(), $(element).find(".time").text().trim()].join(" - ")'
      }
    }
  ]
}
