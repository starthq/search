module.exports = {
  search:[
    {
      type:'link',
      query:'https://podio.com/search.json?query={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.data .object .title',
        expression:'element'
      },
      description:{
        selector:'.data .object :root',
        expression:'element.app.item_name + " by " + element.created_by.name + " in " + element.space.name'
      },
      link:{
        selector:'.data .object .link',
        expression:'element'
      }
    }
  ]
};