function loadImagePromise(url) {
  console.log("load",url)
  return new Promise((reslove, reject) => {
    const img = new Image();

    img.onload = function() {
      console.log("success",url)
      reslove(img)
    }

    img.onerror = function() {
      const msg = "load fail : " + url;
      console.log("fail",url)
      reject(new Error(msg));
    }

    img.src = url;
  })
}



function loadImageCallback(url, callback) {
  const img = new Image();

  img.onload = function() {
    callback(null,img)
  }

  img.onerror = function() {
    const msg = "load fail : " + url;
    callback(new Error(msg));
  }

  img.src = url;
}

export {
  loadImagePromise,
  loadImageCallback
}
