const input_field = document.getElementById("input-field");
const result_field =document.getElementById("result-field");
let lastchar = null;

function deleteLastchar(){
    if(input_field.value.length > 0) input_field.value = input_field.value.slice(0,-1);
}
function computeValue(lastchar){
    let tmpexp = input_field.value;
    if(['+','-','×','÷'].includes(lastchar)) {
        tmpexp = tmpexp.slice(0,-1);
        result_field.value = eval(tmpexp);
        return;
    }

    result_field.value = eval(tmpexp);
}

function allClear(){
    input_field.value = null;
    result_field.value = null;
}

function handleClickButton(el){
    let exp = input_field.value;
    if(el.innerText == '×') exp = exp + '*';
    else if(el.innerText == '÷') exp = exp + '/' ;
    else if(el.innerText == '=') {
        input_field.value = result_field.value ;
        return;
    }
    else if(el.innerText == '⌫') {
        deleteLastchar();
        if(input_field.value.length > 0) {
            lastchar = input_field.value.charAt(input_field.value.length -1);
            computeValue(lastchar);
        }
        if(input_field.value.length == 0) result_field.value = null;
        return;
    }
    else exp = exp + el.innerText ;
    input_field.value = exp;

    if(['+','-','×','÷'].includes(el.innerText)) return;
    result_field.value = eval(exp);
}
