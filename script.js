var bt1= document.getElementById('but1').onclick=function()
{
    alert('Order Added to Cart!');
}
const bt2= document.getElementById('but2').onclick=function()
{
    alert('Order Added to Cart!');
}

const bt3= document.getElementById('but3').onclick=function()
{
    alert('Order Added to Cart!');
}

const bt24= document.getElementById('but4').onclick=function()
{
    alert('Order Added to Cart!');
}

const bt5= document.getElementById('but5').onclick=function()
{
    alert('Order Added to Cart!');
}
const bt6= document.getElementById('but6').onclick=function()
{
    alert('Order Added to Cart!');
}
const bt7= document.getElementById('but7').onclick=function()
{
    alert('Order Added to Cart!');
}


document.getElementById('locate-div').onclick=function()
{
    alert('Lets Take to Cafe Grub-Up!');
}
document.getElementById('locate').onclick=function()
{
    alert('Lets Take to Cafe Grub-Up!');
}

function gen(){
    var x=Math.floor((Math.random()*6)+1);
    console.log(x);
    document.getElementById('divImage').innerHTML=`
    <img src="img/image${x}.jpg"
    style="width:500px; transform: translateX(80px); border-radius:10px;">
    `;
}
