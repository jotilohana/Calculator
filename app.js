function getInput(num){
    var input=document.getElementById("input");
    input.value+=num;
}
function clear_result(){
    var input=document.getElementById("input");
    input.value="";
}
function Output(){
    var input=document.getElementById("input");
    input.value=eval(input.value);
}
