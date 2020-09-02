
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

if (isNaN(minValue)) {
    minValue = 0;
  }

  if (isNaN(maxValue)) {
    maxValue = 99;
  }

  minValue  = (minValue > 999) ? 999 : minValue;
  minValue  = (minValue < -999) ? -999 : minValue;

  maxValue  = (maxValue > 999) ? 999 : maxValue;
  maxValue  = (maxValue < -999) ? -999 : maxValue;

  


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;



if (answerNumber.toString().length < 20 )
{
    answerField.innerText = `Вы загадали число ${humanize (answerNumber) }?`; 
}

    else  {
              answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }




document.getElementById('btnRetry').addEventListener('click', function () 
{
minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

if (isNaN(minValue)) {
    minValue = 0;
  }

  if (isNaN(maxValue)) {
    maxValue = 99;
  }

  minValue  = (minValue > 999) ? 999 : minValue;
  minValue  = (minValue < -999) ? -999 : minValue;

  maxValue  = (maxValue > 999) ? 999 : maxValue;
  maxValue  = (maxValue < -999) ? -999 : maxValue;


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
orderNumber = 1;
gameRun = true;
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumberField.innerText = orderNumber;

if (answerNumber.toString().length < 20 )
{
    answerField.innerText = `Вы загадали число ${humanize (answerNumber) }?`; 
}
    else  {
              answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }

    
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            let AnswerFieldRandom = Math.round( Math.random()*2);
            if (AnswerFieldRandom > 1)
            {
                answerField.innerText =  `Да это легко! Ты загадал...!\n\u{1F914} ${answerNumber }`;
            } else if (AnswerFieldRandom < 1)
            {
            answerField.innerText = `Наверное, это число.....\n\u{1F92F} ${answerNumber }`;
            } else
            { 
                answerField.innerText = `Я уверен, что это \n\u{1F92F} ${answerNumber }`;
            }


        }
    }
})



document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            //minValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let AnswerFieldRandom = Math.round( Math.random()*2);


            if (AnswerFieldRandom > 1)
            {
                answerField.innerText =  `Да это легко! Ты загадал...!\n\u{1F914} ${answerNumber }`;
            } else if (AnswerFieldRandom < 1)
            {
            answerField.innerText = `Наверное, это число.....\n\u{1F92F} ${answerNumber }`;
            } else
            { 
                answerField.innerText = `Я уверен, что это \n\u{1F92F} ${answerNumber }`;
            }

        
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {

    if (gameRun){
        let AnswerFieldRandom = Math.round( Math.random()*2);

        if (AnswerFieldRandom > 1)
        {
            answerField.innerText =  `Я всегда угадываю!!.\n\u{1F914}`;
        } else if (AnswerFieldRandom < 1)
        {
        answerField.innerText = `Это было просто\n\u{1F92F}`;
        } else
        { answerField.innerText = `Я лучший!!\n\u{1F92F}`;
    }
                  gameRun = false;
    }
})


function humanize(num){
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
  
    var numString = num.toString();
  
    if (num < 0) throw new Error('Negative numbers are not supported.');
  
    if (num === 0) return 'zero';
  
    //the case of 1 - 20
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    //100 and more
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }
  
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
      return ones[numString[0]] + ' thousand ' + convert(end);
    }
  }