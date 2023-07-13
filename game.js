var randomnumber = Math.round(Math.random()*10);
var submitButton=document.getElementById("submit");
var message =document.getElementById("message");
var lives =document.getElementById("lives");
var msg;
submitButton.onclick=() => 
{
    let inputnumber =document.getElementById("number-input").value;
    lives--;
    if(inputnumber== randomnumber){
    location.href="win.html"    
    }
    else if (inputnumber>randomnumber){
        msg = "Oops!Greater than the number!! lets Try once more"
    }
    else if(inputnumber <randomnumber){
        msg = "Oops!Less then the number!! lets Try once more"
    }
    else if(lives==0){
        location.href="loss.html"
    }
    message.style.display="inherit";
    message.innerHTML =msg;
    lives.innerHTML=lives;
}