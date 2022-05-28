function calculate() {
    let r = document.getElementById('red').value;
    let o = document.getElementById('orange').value;
    let y = document.getElementById('yellow').value;
    let g = document.getElementById('green').value;
    let b = document.getElementById('blue').value;
    let truths = document.getElementById('truths').value;
    let values = [r,o,y,g,b];
    let colors = ["Red","Orange","Yellow","Green","Blue"]
    let numArr = [0,0,0,0,0];
    let iterations = 0;
    let suspects =[];
    let susString = "";
    let items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('hidden');
    }

    let div = document.getElementById('container');

    for (let j = 0; j < values.length; j++) {
        if (values[j] == "not-me") { 
            numArr.forEach((val, i) => {
                if (i !== j){
                    numArr[i] += 1;
                    document.getElementById(j.toString() + i.toString()).classList.remove('hidden');
                } 
              
              });
        } else {

            numArr[values[j]] += 1;
            document.getElementById(j+values[j]).classList.remove('hidden');
        }
        
    }
        

    for (let k = 0; k <values.length; k++) {
        if (numArr[k] == truths) {
            suspects.push(colors[k]);
        }
    }

    for (let l = 0; l < suspects.length; l++) {
        if (l == suspects.length - 1) {
            susString +=  suspects[l]
        } else {
            susString +=  suspects[l] + " or ";
        }

    }

    if (!(susString == "") && suspects.length > 1) {
        susString += " is possibly the criminal"
        div.textContent = susString;
    } else if (suspects.length == 1) {
        susString += " is the criminal"
        div.textContent = susString;
    }
        else {
        div.textContent = "Invalid Case: no criminal";
    }
    
    

}
