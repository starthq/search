{
    search:
        [
            {
                type : 'audio',
                query : 'http://8tracks.com/search/{{term}}/self?format=jsonh',
                translate : 'parseJSON(response)',
                icon : {
                    selector : '.results .documents .cover_urls > .sq56',
                    expression : 'element'
                },
                name : {
                    selector : '.results .documents .name',
                    expression : 'element'
                },
                link : {
                    selector : '.results .documents .web_path',
                    expression : '"https://8tracks.com/" + element'
                },
                description : {
                    selector : '.results .documents .description',
                    expression : 'element'
                }
            },
            {
                type : 'audio',
                query : 'http://8tracks.com/search/{{term}}/mixes?format=jsonh',
                translate : 'parseJSON(response)',
                icon : {
                    selector : '.results .mixes .documents .expedited_data .cover_urls .sq56',
                    expression : 'element'
                },
                name : {
                    selector : '.results .mixes .documents .expedited_data .name',
                    expression : 'element'
                },
                link : {
                    selector : '.results .mixes .documents .expedited_data > .web_path',
                    expression : '"https://8tracks.com/" + element'
                },
                description : {
                    selector : '.results .mixes .documents .expedited_data',
                    expression : '"Total plays: " + element.plays_count + ". Description: " + element.description'
                }
            },
            {
                type : 'audio',
                query : 'http://8tracks.com/search/{{term}}/collections?format=jsonh',
                translate : 'parseJSON(response)',
                icon : {
                    selector : '.results .collections .documents .expedited_data .cover_urls :first-child',
                    expression : 'element.replace("w=100,h=100", "w=56,h=56")'
                },
                name : {
                    selector : '.results .collections .documents .expedited_data .name',
                    expression : '"A collection of mixes from 8track for " + element + "."'
                },
                link : {
                    selector : '.results .collections .documents .expedited_data > .web_path',
                    expression : '"https://8tracks.com/" + element'
                },
                description : {
                    selector : '.results .collections .documents .expedited_data',
                    expression : '"Mixes count: " + element.mixes_count + "."'
                }
            },
            {
                type:'answer',
                query:'http://8tracks.com/search/{{term}}/artists?format=jsonh',
                translate:'parseJSON(response)',
                icon : {
                    selector : '.results .artists .documents .expedited_data .original_imgix_url',
                    expression : 'element'
                },
                name:{
                    selector:'.results .artists .documents .expedited_data .name',
                    expression:'element'
                },
                link:{
                    selector:'.results .artists .documents .expedited_data > .web_path',
                    expression:'"https://8tracks.com/" + element'
                },
                description:{
                    selector:'.results .artists .documents .expedited_data > .lastfm_bio',
                    expression:'element'
                }
            },
            {
                type:'contact',
                query:'http://8tracks.com/search/{{term}}/users?format=jsonh',
                translate:'parseJSON(response)',
                image : {
                    selector : '.results .users .documents .expedited_data .avatar_urls > .max200',
                    expression : 'element'
                },
                name:{
                    selector:'.results .users .documents .expedited_data .name',
                    expression:'element'
                },
                link:{
                    selector:'.results .users .documents .expedited_data > .web_path',
                    expression:'"https://8tracks.com/" + element'
                }
            }
        ]
}
