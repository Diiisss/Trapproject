// console.log("Hola")

// let total = 0
// for (let i=0 ; i<500000000; i+=1){
//                     total+= 5
// }
// console.log(total)
// console.log ("Ultima tarea")


//Codigo asincrono
//3 formas
//1- async callbacks
//2- promesas
//3- async await

//CALLBACK SINCRONO
// const generarNumero=()=>{
//                     return Math.floor(Math.random() * 10)

// }
// const printNumero =(callback)=>{
//                     let numero = callback()
//                     console.log(numero)
// }

// printNumero(generarNumero)


//CALLBACK ASINCRONO

// const bajarVideo =(url,callback)=>{

//                     console.log('Bajando video de ..${url}')
//                     setTimeout(()=>{
//                                         console.log("Video descargado correctamente") 
//                                         callback(url)
//                     },3000)
                                        
// }
// // let url="http:/youtube.com"
// // bajarVideo(url)


// const reproducirVideo=(url)=>{
//                     console.log('Reproduciendo video de ${url}.')
// }

// let url ="http:youtube.com"
// // bajarVideo(url)
// // reproducirVideo(url)
// bajarVideo(url,reproducirVideo)


//PROMESAS SON UN OBJETO QUE TIENE 3 ESTADOS PENDIENTE RESUELTA O RECHASADA
//Como construir una promesa

//const nombreDeMiPromesa = new Promise((resolve,reject)=>{})


// let aprobasteElcurso = true

const siApruevoElCurso = new Promise((resolve,reject)=>{
                    
   setTimeout(()=>{})
                     if(aprobasteElcurso){
                                         const telefono ={
                                                             modelo:'Iphone12',
                                                             capacidad:'128gb',
                                                             color: 'Rojo'
                                         }
                                         resolve(telefono)
                     } else{
                                         reject("REPROBASTE LE CURSO")
                     }
})


// //CONSUMIR LA PROMESA
// //funcion manejadora para el exito o el fracaso de esta promesa

// const promesaCumplida =(resolvedValue)=>{
//                     console.log('Te regalo tu ${resolvedValue.modelo}')

// }

// const promesaRota=(rejectValue)=>{
//                     console.log('No te commpro nada porque ${rejectValue}')

// }

// //ASI CONSUMO LA PROMESA CON EL .THEN
// // siAproboElCurso.then(promesaCumplida,promesaRota)

// //OTRA FORMA
// siApruevoElCurso.then((resolvedValue)=>{  
//                      console.log('Te regalo tu nuevo ${resolvedValue.modelo}')

// },
// (rejectValue)=>{

//                     console.log('No te commpro nada porque ${rejectValue}')


// }). catch((err)=>{
//                     console.log("Captura cualquier error  en el proceso")
// })


//Crear funciones que retornen una promesa

// const mireNotas = ()=>{
//                     return new Promise((resolve, reject) => {
//                                         if(aprobasteElcurso){
//                                                             const telefono ={
//                                                                                 modelo:'Iphone12',
//                                                                                 capacidad:'128gb',
//                                                                                 color: 'Rojo'
//                                                             }
//                                                             resolve(telefono)
//                                         } else{
//                                                             reject("REPROBASTE LE CURSO")
//                                         }
                                        
//                     })
// }

// //COMO CONSUMIR UNA FUNCION ECHA PROMESA

// mireNotas()
//     .then((result)=>{
//         console.log('Te regalo tu nuevo ${resolvedValue.modelo}');
//      }).catch((err)=>{
//         console.log('error ${err}')
//      }).finally(()=>{
//         console.log("La promesa termino")
//      })




//Array de Productos para mostrar

const imprimirProductos =()=>{
   return new Promise((resolve, reject) => {
   setTimeout(()=>{

        let producto ={
         name:"Camisa",
         color:"rojo",
         talle:"xl"
      }
      })
   },3000)
}

imprimirProductos()
.then((resut)=>{
   console.log(result)
}).catch((err)=>{
   console.log("Error en la ejecucion de la promesa")
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Alternativa de resolver el ejercicio:

const imprimirProductos2 =()=>{
   return new Promise((resolve, reject) => {
   setTimeout(()=>{

        let producto ={
         name:"Camisa",
         color:"rojo",
         talle:"xl"
      }
      })
   },3000)
}

imprimirProductos2()
.then((resut)=>{
   console.log(result)
}).catch((err)=>{
   console.log("Error en la ejecucion de la promesa")
})
