 {
  search:[
    {
      type:'link',
      query:'https://api.soundcloud.com/users?client_id=YOUR_CLIENT_ID&q={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.user :root',
        expression:'element.username'
      },
      description:{
        selector:'.user .description',
        expression:'element'
      },
      link:{
        selector:'.user .avatar-url',
        expression:'element'
      }
    }
  ]
}
