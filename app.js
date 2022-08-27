// https://www.omnicalculator.com/chemistry/buffer-capacity#buffer-capacity-equation

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const buffercapacityRadio = document.getElementById('buffercapacityRadio');
const initialphRadio = document.getElementById('initialphRadio');
const finalphRadio = document.getElementById('finalphRadio');
const amountofacidbaseRadio = document.getElementById('amountofacidbaseRadio');

let buffercapacity;
let initialph = v1;
let finalph = v2;
let amountofacidbase = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

buffercapacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial ph';
  variable2.textContent = 'Final ph';
  variable3.textContent = 'Amount of acid/base';
  initialph = v1;
  finalph = v2;
  amountofacidbase = v3;
  result.textContent = '';
});

initialphRadio.addEventListener('click', function() {
  variable1.textContent = 'Buffer capacity';
  variable2.textContent = 'Final ph';
  variable3.textContent = 'Amount of acid/base';
  buffercapacity = v1;
  finalph = v2;
  amountofacidbase = v3;
  result.textContent = '';
});

finalphRadio.addEventListener('click', function() {
  variable1.textContent = 'Buffer capacity';
  variable2.textContent = 'Initial ph';
  variable3.textContent = 'Amount of acid/base';
  buffercapacity = v1;
  initialph = v2;
  amountofacidbase = v3;
  result.textContent = '';
});

amountofacidbaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Buffer capacity';
  variable2.textContent = 'Initial ph';
  variable3.textContent = 'Final ph';
  buffercapacity = v1;
  initialph = v2;
  finalph = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(buffercapacityRadio.checked)
    result.textContent = `Buffer capacity = ${computeBuffercapacity().toFixed(2)}`;

  else if(initialphRadio.checked)
    result.textContent = `Initial ph = ${computeInitialph().toFixed(2)}`;

  else if(finalphRadio.checked)
    result.textContent = `Final ph = ${computeFinalph().toFixed(2)}`;

  else if(amountofacidbaseRadio.checked)
    result.textContent = `Amount of acid/base = ${computeAmountofacidbase().toFixed(2)}`;
})

// calculation

function computeBuffercapacity() {
  return Number(amountofacidbase.value) / (Number(finalph.value) - Number(initialph.value));
}

function computeInitialph() {
  return Number(finalph.value) - (Number(amountofacidbase.value) / Number(buffercapacity.value));
}

function computeFinalph() {
  return (Number(amountofacidbase.value) / Number(buffercapacity.value)) + Number(initialph.value);
}

function computeAmountofacidbase() {
  return Number(buffercapacity.value) * (Number(finalph.value) - Number(initialph.value));
}