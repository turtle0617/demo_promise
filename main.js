import {
  loadImagePromise,
  loadImageCallback
} from "./loadImage.js"



function addImage(img) {
  document.body.appendChild(img)
}

function funA(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str)
    }, 1000)
  })
}
// [funA("1"), funA("2"), funA("3")].map(promise => {
//   promise.then((img) => {
//     console.log(img);
//   })
// })

// loadImagePromise("https://picsum.photos/400/400?image=0")
//   .then((response) => {
//     addImage(response)
//     return loadImagePromise("https://picsum.photos/400/400?image=10")
//   })
//   .then((img)=>{
//     console.log(img);
//     addImage(img)
//   })
//
// for (var i = 0; i < 3; i++) {
//
// }








loadImagePromise("https://picsum.photos/400/400?image=0")
  .then((response) => {
    addImage(response)
    return loadImagePromise("https://pum.photos/400/400?image=10")
  })
  .then(null,(reject)=>{
    console.log("reject",reject);
    return loadImagePromise("https://picsum.photos/400/400?image=100");
  })
  .then((response) => {
    addImage(response)
    return loadImagePromise("https://picsum.photos/400/400?image=1000")
  })
  .then((response) => {
    addImage(response)
  })
  .catch((err) => {
    throw err
  })







// function addImage(img) {
//   document.body.appendChild(img)
// }

// loadImageCallback("https://picsum.photos/400/400?image=0", (error,img) =>{
//   if(error) throw error
//   addImage(img);
//   loadImageCallback("https://picsum.photos/400/400?image=10", (error,img) =>{
//     if(error) throw error
//     addImage(img);
//     loadImageCallback("https://picsum.photos/400/400?image=100", (error,img) =>{
//       if(error) throw error
//       addImage(img);
//
//     })
//   })
// })









// function addImage(img) {
//   document.body.appendChild(img)
// }
//
// Promise.all([loadImagePromise("https://picsum.photos/400/400?image=0"),
//     loadImagePromise("https://picsum.photos/400/400?image=10"),
//     loadImagePromise("https://picsum.tos/400/400?image=10"),
//     loadImagePromise("https://picsum.photos/400/400?image=10"),
//     loadImagePromise("https:/icsum.photos/400/400?image=10"),
//     loadImagePromise("https://picsum.photos/400/400?image=10"),
//   ])
//   .then((response) => {
//     console.log("then",response);
//     response.forEach(addImage)
//   })
//   .catch((err)=>{
//     console.log(err)
//     return err
//   })
//   .then((str)=>{
//     console.log("2. then",str);
//   })
