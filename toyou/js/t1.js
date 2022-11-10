let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('你最爱的是谁？回答正确才能打开游戏哦！');
    if (myName !== '马海军'){
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '没错你最爱的就是' + myName;
        document.getElementById('dis').style.display = 'block';
        document.getElementById('d2').style.display = 'block';
    }
}
setUserName()

let randomNumber = Math.floor(Math.random() * 100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = '你猜的数字是：';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber){
        lastResult.textContent = '恭喜你！你猜对了';
        lastResult.style.color = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = '猜测超过10次，游戏结束，再来一次吧！';
        lowOrHi.textContent = '';
        setGameOver();
    }else {
        lastResult.textContent = '错误！';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '最后一次猜的数字太小了！';
        }else if (userGuess > randomNumber){
            lowOrHi.textContent = '最后一次猜的数字太大了！';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏！';
    document.getElementById('d2').appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
function random(number) {
    return Math.floor(Math.random()*(number+1));
}

 function str() {
     document.body.style.backgroundColor =  'rgb(' + random(255) + ',' +
         random(255) + ',' + random(255) + ')';
 }

   setInterval(str,3000)
