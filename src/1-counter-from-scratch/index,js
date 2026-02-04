const cur = document.getElementById('cur-count');
const inc = document.getElementById('increment');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');
const t = document.getElementById('time');
const list = document.getElementById('scores')

let time = 10;
let timerset = false;;
let count = 0;
let intervalId = null;

timer.addEventListener('click', () => {
    if (timerset) {
        return;
    }
    timerset = true;
    time = 10;
    t.textContent = time;
    intervalId = setInterval(() => {
        time--;
        t.textContent = time;
        if (time <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            timerset = false;;
            t.textContent = 'Times Up, Click reset to try again!';
            const li = document.createElement('li');
            li.textContent = count;
            list.append(li);
            cur.textContent = 0;
            count = 0;
        }
    }, 1000);
})

inc.addEventListener('click', () => {
    if (!timerset) {
        return;
    }
    count++;
    cur.textContent = count;
    console.log('button pressed');
})

reset.addEventListener('click', () => {
    if (timerset) {
        return;
    }
    timerset = true;
    time = 10;
    t.textContent = time;
    intervalId = setInterval(() => {
        time--;
        t.textContent = time;
        if (time <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            timerset = false;;
            t.textContent = 'Times Up, Click reset to try again!';
            cur.textContent = 0;
            count = 0;
        }
    }, 1000);
})
