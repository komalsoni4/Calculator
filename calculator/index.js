
let screen = document.getElementById('inputt');
let buttons = document.getElementsByClassName('calculator');
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',(e) => {
      buttonText = e.target.innerText; 
      if(buttonText == 'C')  screen.value=" ";       
      else if(buttonText =='=')   screen.value=eval(screen.value);
      else {
            screen.value +=buttonText;
            
        }
      
    })
   
}