const memeCont = document.querySelector('#memes');
const mainSec = document.querySelector('#main-section')  
const generateBtn = document.querySelector('#btn-generator button');



const imageArray = [

   {
    image : 'img/img1.jpeg',
    memeText : "Wait Did you just Say That!!"
   },

   {
    image : 'img/img2.jpeg',
    memeText : "What did the fist say to the face!!"
   },
   
   {
    image : 'img/img3.jpeg',
    memeText : "Did you just get me a DRINK!!"
   },

   {
    image : 'img/img4.jpeg',
    memeText : "When Sipping Tea is GOALs!!"
   },

   {
    image : 'img/img5.jpeg',
    memeText : "When they Wake you UP from your NAP!!"
   }
  
]


generateBtn.addEventListener('click', function(e){
  e.preventDefault();
    const idx = Math.floor(imageArray.length * Math.random());
    const newImgElement = document.createElement('img');
    const isImage = memeCont.querySelector('img');

    newImgElement.setAttribute('src', imageArray[idx].image);

    if(isImage) {
      memeCont.innerHTML = '';
    }

    
   
          const newPelement = document.createElement('p');
          newPelement.innerText = imageArray[idx].memeText;
          memeCont.classList.add('img-one');
          memeCont.appendChild(newPelement);
          memeCont.appendChild(newImgElement);
          console.log(memeCont.appendChild(newImgElement))
             
});


