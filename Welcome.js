const path = document.querySelectorAll('#XinChao path');
for (let i=0;i<path.length;++i)
{
    path[i].style.strokeDashoffset = path[i].getTotalLength();
    path[i].style.strokeDasharray = path[i].getTotalLength();
}

document.getElementById('bg').style.backdropFilter = 'blur(0px)';
setTimeout( ()=> {
    document.getElementById('bg').remove();
    document.getElementById('XinChao').remove();
},5500);