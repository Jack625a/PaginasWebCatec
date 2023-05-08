document.getElementById('btn1').addEventListener('click',function(){
    this.classList.add('animate_fadeIn')
});

document.getElementById('btn2').addEventListener('click',function(){
    this.classList.add('animate_bounce')
})

document.getElementById('btn3').addEventListener('click',function(){
    this.classList.add('animate_shakeX')
})

setTimeout(()=>{
    this.classList.remove('animate_shakeX')
},1000
)