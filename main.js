function ok(){
    var a = document.getElementById('inp').value
    a>=18 ? document.getElementById('rp').textContent = 'Siz balog`atga yetibsz' :
     document.getElementById('rp').textContent = 'Sorry , You are young now!' 
}