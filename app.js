const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const slideImg = document.querySelectorAll('.slideImg');
const number = document.querySelector('.number');

// console.log(slideImg);

// console.log(slideArr)

let count = 0;
let num = 1;
nextBtn.addEventListener('click', () => {
    count++;
    number.innerHTML = ++num;
    if(count > slideImg.length - 1){
        count = 0;
    }
    if(num > slideImg.length - 1){
        num = 0
    }
    display();
        
    })
    

    prevBtn.addEventListener('click', () => {
        count--;
        number.innerHTML = --num;   
        if(num < 1){
            number.innerHTML = 1;
        }
        display();
    });
    
    function display(){
        slideImg.forEach((slide, index) => {
            slide.style.transform = `translateX(-${count * 600}px)`;

        })
    }