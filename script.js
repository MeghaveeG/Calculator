
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    var inputInnerHTML = e.target.innerHTML;
    condition(inputInnerHTML);
  });
});

document.addEventListener('keydown', (e) => {
  // Check if the key pressed is a number, operator, or specific key
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    condition(e.key);
  } else if (e.key === 'Enter') {
    condition('=');
  } else if (e.key === 'Backspace') {
    condition('DEL');
  } else if (e.key === 'Escape') {
    condition('AC');
  }
});

function condition(e){
  if(e == '='){
    try {
      string = eval(string);
      document.querySelector('input').value = string;
    } catch {
      document.querySelector('input').value = "Error";
      string = "";
    }
  }
  else if(e == 'AC'){
    string = "";
    document.querySelector('input').value = string;
  }
  else if(e == 'DEL'){
    string = string.slice(0, string.length-1);
    document.querySelector('input').value = string;
  }
  else{ 
  console.log(e.target)
  string = string + e;
  document.querySelector('input').value = string;
    }
}