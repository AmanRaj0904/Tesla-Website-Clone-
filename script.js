const bar = document.getElementById('bars');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        console.log("Clicked");
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        console.log("Clicked");
    })
}