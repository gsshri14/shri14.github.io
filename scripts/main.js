
let myImage = document.querySelector('img');

myImage.onclick = function() {
let mySrc = myImage.getAttribute('src');

if( mySrc === 'images/moz.jpg'){

    myImage.setAttribute('src' , 'images/firefox2.jpg');
}
else{
    myImage.setAttribute('src', 'images/moz.jpg');
}

}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){

    let myName = prompt('Please enter your name.');

    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName ;
    }
}



if(!localStorage.getItem('name')){

    setUserName();
}
else{

    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'mozilla is cool, ' + storedName;
}


myButton.onclick = function(){
    setUserName();
}

