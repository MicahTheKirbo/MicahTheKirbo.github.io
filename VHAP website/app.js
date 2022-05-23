const numberElem = document.getElementById('number');
const result = document.getElementById('result');

function calculate() {
    let number = Number(numberElem.value, 10);
    let string = "";

    do {


        let myArr = String(number).split("").map((num)=>{
            return Number(num)
        });
    
        myArr = myArr.sort((a, b) => b - a);
        let bigNum = parseInt(myArr.join(''));
        
        
        myArr = myArr.sort((a, b) => a - b);
        let smallNum = parseInt(myArr.join(''));
        
        number = bigNum - smallNum;
        if (number == 99) {
            number = 990;
        }
        console.log(number);
        string = string + number + " => "
    } while (!(number == 0 || number == 495));
    string = string + "loops...";
    result.textContent = string;
   
}
