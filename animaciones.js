document.getElementById('btn1').addEventListener('click',function(){
    this.classList.add('animate_fadeIn')
});

document.getElementById('btn2').addEventListener('click',function(){
    this.classList.add('animate_bounce')
})

document.getElementById('btn3').addEventListener('click',function(){
    this.classList.add('animate_shakeX')
})

document.getElementById('contenedor1').addEventListener('mousemove',function(){
    this.classList.add('animate__bounce')
})

document.getElementById('subtitulo').setProperty('-animate-duration', '8s')