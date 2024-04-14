export const productos = [
    {
        
        name:'Abeul',
        stock:7,
        price:4500,
        description:'Abedul',
        imagen1:'../images/arboles/abedu.jpg',
        category:'arboles'
    },
    {
        name:'Acacia',
        stock:18,
        price:7000,
        description:'Acacia',
        imagen1:'../images/arboles/acacia.jpg',
        category:'arboles'
    },
    {
        
        name:'Ceibo',
        stock:21,
        price:8600,
        description:'Ceibo',
        imagen1:'../images/arboles/ceibo.jpg',
        category:'arboles'
    },
    {
        
        name:'Cipres',
        stock:2,
        price:8900,
        description:'Cipres',
        imagen1:'../images/coniferas/cipres.jpg',
        category:'coniferas'
    },
    {
        name:'PinusEllioti',
        stock:6,
        price:5500,
        description:'PinusElliot',
        imagen1:'../images/coniferas/pinusElliotti2.jpg',
        category:'coniferas'
    },
    {
        
        name:'Tuya',
        stock:9,
        price:5500,
        description:'Tuya',
        imagen1:'../images/coniferas/tuya.jpg',
        category:'coniferas'
    },
    {
        
        name:'Arandano',
        stock:1,
        price:5500,
        description:'Arandano',
        imagen1:'../images/frutales/arandano.jpg',
        category:'frutales'
    },
    {
        
        name:'Durazno',
        stock:4,
        price:5500,
        description:'Durazno',
        imagen1:'../images/frutales/durazno.jpg',
        category:'frutales'
    },
    {
        
        name:'Limonero',
        stock:3,
        price:5500,
        description:'Limonero',
        imagen1:'../images/frutales/limonero.jpg',
        category:'frutales'
    },
    {
        
        name:'Chamaerops',
        stock:10,
        price:5500,
        description:'Chamaerops',
        imagen1:'../images/palmeras/ChamaeropsHumilis.jpg',
        category:'palmeras'
    },
    {
        
        name:'Darsena',
        stock:7,
        price:5500,
        description:'Darsena',
        imagen1:'../images/palmeras/drasena.jpg',
        category:'palmeras'
    },
    {
        
        name:'PhoenixCana',
        stock:11,
        price:5500,
        description:'PhoenixCana',
        imagen1:'../images/palmeras/phoenixCana.jpg',
        category:'palmeras'
    },
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
            }
        },1000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No existe esa planta')
            }else{
                let oneProduct = productos.find((prod)=> prod.id === id)
                resolve(oneProduct)
            }
        },1500)
    })
}