export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: false,
            },
        },
        {
            name:'imgUrlNight',
            title:'ImgUrlNight',
            type: 'image',
            options: {
              hotspot: false,
            },
        },
        {
            name:'imgSrc',
            title:'ImgSrc',
            type:'string'
        },
    ]
}