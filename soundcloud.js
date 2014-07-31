 {
  search:[
    {
      type:'link',
      query:'https://api.soundcloud.com/users?client_id=YOUR_CLIENT_ID&q={{term}}',
      translate:'parseJSON(response)',
      name:{
        selector:'.data .object .username',
        expression:'element'
      },
      description:{
        selector:'.data .object .description',
        expression:'element'
      },
      link:{
        selector:'.data .object .avatar-url',
        expression:'element'
      }
    }
  ]
}
