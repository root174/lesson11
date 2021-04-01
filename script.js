let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
//Колекция вопросов
const str0='ЭТО БЫЛО ЛЕГКО';
const  str1=`НУ ЧТО, ЕЩЕ =)`;
const  str2=`ХА ХА ХА `;
const  str3='ДАВАЙ ЕЩЕ ПОИГРАЕМ';

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;
//кнопка ЗАНОВА
document.getElementById('btnRetry').addEventListener('click', function () {
    //minValue = 0;
   // maxValue = 100;
orderNumber = 0;
orderNumberField.innerText = orderNumber;
answerField.innerText = 'ЭТО БУДЕТ ЛЕГКО';
minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
gameRun = true;
  
})
//Кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
                
        if (minValue === maxValue){
   //         if (nom == 0) {    answerField.innerText =str0;}
     //       else {if (nom == 1) {answerField.innerText = str1;}}
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            
        
            //answerField.innerText ='ДАВАЙ ПОИГРАЕМ';
            console.log(answerField);
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           
            }
            
            
             // default:
               // answerField.innerText ='ДАВАЙ ПОИГРАЕМ';
           
            answerField.innerText = `Вы загадали число ${answerNumber }? `;
            
        }
        
            
 //   }
})
//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 100) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})
// if n <100 ?? 1 : 2;
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        // выборка ответов из колекции
        const nom=Math.floor(Math.random() * 4);
        console.log('nom=', nom)
        switch (nom) {
                case 0:
                  answerField.innerText = str0;
                  break;
                case 1:
                  answerField.innerText =str1;
                  break;
                case 2:
                answerField.innerText =str2;
                  break;
                case 3:
                  answerField.innerText =str3;
                  break;}

        //answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        answerNumber=0;
        gameRun = false;
    }
})

