
window.addEventListener('load', function() {
document.querySelector('#box').style.top = '0';
document.querySelector('#box').style.left = '0';
    });
                    
window.addEventListener('load', function() {
document.querySelector('#box_button').style.top = '0';
document.querySelector('#box_button').style.left = '0';
    });
                    
document.addEventListener("DOMContentLoaded", function() {
var block = document.querySelector(".main_box");
block.classList.add("show");
    });
                    
window.addEventListener('load', function() {
document.querySelector('#boxbox').style.top = '0';
document.querySelector('#boxbox').style.left = '0';
    });

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          for (let k = 0; k < 10; k++) {
            for (let l = 0; l < 10; l++) {
              console.log('' + i + j + k + l);
            }
          }
        }
      }