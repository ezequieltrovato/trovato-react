const productos = [
    {
        id:'1',
        name:'Abeul',
        stock:3,
        price:4500,
        description:'Abedu',
        imagen1:'../images/arboles/abedu.jpg',
        category:'arboles'
    },
    {
        id:'2',
        name:'Acacia',
        stock:3,
        price:7000,
        description:'Acacia',
        imagen1:'../images/arboles/acacia.jpg',
        category:'arboles'
    },
    {
        id:'3',
        name:'Ceibo',
        stock:3,
        price:8600,
        description:'Ceibo',
        imagen1:'../images/arboles/ceibo.jpg',
        category:'arboles'
    },
    {
        id:'4',
        name:'Cipres',
        stock:3,
        price:8900,
        description:'Cipres',
        imagen1:'../images/coniferas/cipres.jpg',
        category:'coniferas'
    },
    {
        id:'5',
        name:'PinusEllioti',
        stock:3,
        price:5500,
        description:'PinusElliot',
        imagen1:'../images/coniferas/pinusElliotti2.jpg',
        category:'coniferas'
    },
    {
        id:'6',
        name:'Tuya',
        stock:3,
        price:5500,
        description:'Tuya',
        imagen1:'../images/coniferas/tuya.jpg',
        category:'coniferas'
    },
    {
        id:'7',
        name:'Arandano',
        stock:3,
        price:5500,
        description:'Arandano',
        imagen1:'../images/frutales/arandano.jpg',
        category:'frutales'
    },
    {
        id:'8',
        name:'Durazno',
        stock:3,
        price:5500,
        description:'Durazno',
        imagen1:'../images/frutales/durazno.jpg',
        category:'frutales'
    },
    {
        id:'9',
        name:'Limonero',
        stock:3,
        price:5500,
        description:'Limonero',
        imagen1:'../images/frutales/limonero.jpg',
        category:'frutales'
    },
    {
        id:'10',
        name:'Chamaerops',
        stock:3,
        price:5500,
        description:'Chamaerops',
        imagen1:'../images/palmeras/ChamaeropsHumilis.jpg',
        category:'palmeras'
    },
    {
        id:'11',
        name:'Darsena',
        stock:3,
        price:5500,
        description:'Darsena',
        imagen1:'../images/palmeras/drasena.jpg',
        category:'palmeras'
    },
    {
        id:'1',
        name:'PhoenixCana',
        stock:3,
        price:5500,
        description:'PhoenixCana',
        imagen1:'../images/palmeras/phoenixCana.jpg',
        category:'palmeras'
    },
]

export const getProducts =() => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                
                resolve(productos)
            }
        },500)
    })
}

export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema')
            }else{
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }
        }, 500)
    })
}