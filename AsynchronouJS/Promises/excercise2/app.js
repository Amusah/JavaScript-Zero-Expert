const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000)
  })
}

const imgContainer = document.querySelector('.images');

const createImage = function(path){
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('src', path);

    img.addEventListener('load', () => {
        imgContainer.append(img);
        resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'))
    })
  })
}

let currentImg;
createImage('img/img-1.jpg')
.then(img => {
  currentImg = img;
  console.log('image 1 loaded');
  return wait(2);
}).then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-2.jpg')
})
.then((img) => {
  currentImg = img;
  console.log('image 2 loaded');
  return wait(2);
})
.then(() =>{
  currentImg.style.display = 'none';
})
.catch(err => console.error(err))