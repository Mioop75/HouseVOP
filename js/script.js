document.querySelector("#burger").addEventListener("click", function() {
   document.querySelector("#menu").classList.toggle("show");
   document.body.classList.toggle("hide");
});

document.querySelector("#burger").addEventListener('click', function(){
   document.querySelector('#burger span').classList.toggle('active');
})

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});

function getForm(num) {
   let name = document.querySelector(`#name${num}`),
      tel = document.querySelector(`#tel${num}`),
      btn = document.querySelectorAll("#btn");
   
   for(let i = 0; i < btn.length; i++) {
      btn[0].addEventListener("click", () => {
         alert(`Имя: ${name1.value} и Телефон: ${tel1.value}`);
      })

      btn[1].addEventListener("click", () => {
         alert(`Имя: ${name2.value} и Телефон: ${tel2.value}`);
      })
   }
}

getForm();