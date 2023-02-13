export default {
    name:'certifications',
    title:'Certifications',
    type:'document',
    fields:[
            {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'year',
                title:'Year',
                type:'string'
            },
            {
                name:'provider',
                title:'Provider',
                type:'string'
            },
            {
                name:'imgUrl',
                title:'ImgUrl',
                type: 'image',
                options: {
                  hotspot: true,
                },
            },
    ]
}