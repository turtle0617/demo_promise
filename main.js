// import {
//   loadImagePromise,
//   loadImageCallback
// } from "./loadImage.js"

const imgQune = ["https://picsum.photos/400/400?image=0",
  "https://picsum.photos/400/400?image=10",
  "https://picsum.photos/400/400?image=12",
  "https://picsum.photos/400/400?image=13",
  "https://picsum.photos/400/400?image=15",
  "https://picsum.photos/400/400?image=17",
]

function addImage(img) {
  console.log("add",img);
  document.body.appendChild(img)
}

function loadImagePromise(url) {
  console.log("load", url)
  return new Promise((reslove, reject) => {
    const img = new Image();
    img.onload = function() {
      reslove(img)
    }
    img.onerror = function() {
      const msg = "load fail : " + url;
      console.log("fail", url)
      reject(new Error(msg));
    }
    img.src = url;
  })
}

function promiseChain(qune) {
  qune.reduce((prePromise, url) => {
    console.log(prePromise);
    return prePromise
      .then((img) => {
        console.log();
        addImage(img)
        return loadImagePromise(url)
      })
  }, loadImagePromise("https://picsum.photos/400/400?image=7"))
}

promiseChain(imgQune);
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







// loadImagePromise("https://picsum.photos/400/400?image=0")
//   .then((response) => {
//     addImage(response)
//     return loadImagePromise("https://pum.photos/400/400?image=10")
//   })
//   .then(null, (reject) => {
//     console.log("reject", reject);
//     return loadImagePromise("https://picsum.photos/400/400?image=100");
//   })
//   .then((response) => {
//     addImage(response)
//     return loadImagePromise("https://picsum.photos/400/400?image=1000")
//   })
//   .then((response) => {
//     addImage(response)
//   })
//   .catch((err) => {
//     throw err
//   })







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
