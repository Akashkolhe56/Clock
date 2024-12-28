document.addEventListener('DOMContentLoaded', () => {
    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');
    console.log(hour); 

    setInterval(() => {
        const d = new Date();
        const htime = d.getHours();
        const mtime = d.getMinutes();
        const stime = d.getSeconds();

        const hrotation = 30 * htime + mtime / 2;
        const mrotation = 6 * mtime;
        const srotation = 6 * stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
});
