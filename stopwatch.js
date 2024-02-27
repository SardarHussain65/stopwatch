let milisec = 0;
let second = 0;
let mint = 0;

timer = false;

let startBtn = document.querySelector(".btn-start");
startBtn.addEventListener('click', () => start());
let stopBtn = document.querySelector(".btn-stop");
stopBtn.addEventListener('click', () => stop());
let resetBtn = document.querySelector( ".btn-reset" );
resetBtn.addEventListener("click", () => reset()) ;
let cColor =  document.querySelector("p");
const colors = ['red','green','blue', 'purple',  '#6c7a89',  '#f5b342', '#d18e66', '#ffa69d', '#ef6c71','aqua'];


function start() {
    timer = true;
    myfunc();
}
function stop() {
    timer = false;
    myfunc();
}
function reset(){
    location.reload();
    }


const addPrefix = (num) => {
    if (num < 10) {
        return "0" + num;
    } else {
        return num
    }
}

function myfunc() {
    console.log("clicekd");
    if (timer == true) {
        milisec = milisec + 1;
        if(milisec === 50 || milisec === 100){
            cColor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        if (milisec == 100) {
            second = second + 1;
            milisec = 0;
            if (second == 60) {
                mint = mint + 1;
                second = 0;
            }
        }
        document.querySelector(".milisec").innerHTML = addPrefix(milisec);
        document.querySelector(".second").innerHTML = addPrefix(second);
        document.querySelector(".mint").innerHTML = addPrefix(mint);

        setTimeout(() => myfunc(), 10)
    }
}