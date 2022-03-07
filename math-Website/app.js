var speed;
var startNum;
var currentNum;
var currentStr;
var state;
var lastNum;
var stepsNum = 0;
const steps = document.getElementById('steps');
const submit = document.getElementById('submit');
const stopButton = document.getElementById('stop');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const result = document.getElementById('result');

async function calculate(){
  speed = document.getElementById('speed').value;
  startNum = Number(document.getElementById('startNumber').value, 10);
  currentNum = document.getElementById('startNumber').value;
  currentNum2 = Number(document.getElementById('startNumber').value, 10);
  stepsNum = 0;
  
  
  if (speed >= -1 && startNum > 0 && Number.isInteger(startNum) == true)  {
    stopButton.classList.remove('hidden');
    submit.classList.add('hidden'); 
    state = true;
    do {

      currentStr = '';

      do {

        if(currentNum%2 == 0) {
          currentStr = currentStr + currentNum  + ", " + currentNum + "/2 => ";
          currentNum = currentNum / 2;
        } else{
          currentStr = currentStr + currentNum + ", " + currentNum + "*3 + 1 => ";
          currentNum = currentNum * 3 + 1;
        }

        stepsNum += 1;

      } while (!(currentNum == 1))

      result.innerText = currentStr + "loops...";
      steps.innerText = stepsNum + " steps";
      stepsNum = 0;
      lastNum = currentNum;
      currentNum = currentNum2 + 1;
      currentNum2 += 1;
      
      await sleep(speed);
      if (state === false || !(lastNum === 1)) {
        return;
      }

    } while (state == true);
       
  } else if (!(speed.length == 0 || startNum.length == 0)) {
    alert('The values have to be positive numbers!');
  }
  
}

function stopCalc(){
  state = false;
  document.getElementById('form').reset();
  stopButton.classList.add("hidden");
  submit.classList.remove('hidden');
  
}

//see if you can write to a file on github, if so let other people write to the file