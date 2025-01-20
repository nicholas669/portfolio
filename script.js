function time(){
    let date = document.getElementById('time')
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const amOrPm = h >= 12 ? 'PM' : 'AM';
    date.innerHTML = h + ':' + m + ':' + s + ' ' + amOrPm;

}
setInterval(time,1000);