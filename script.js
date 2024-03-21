

const generateEl = document.querySelector('#generate-el');
const passwordOne = document.querySelector('.password-one');
const passwordTwo = document.querySelector(".password-two")



const generatePassword = (
    length = 7,
    characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
  ) =>
    Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => characters[x % characters.length])
      .join('')
  


function renderPassword (){
    let randomStringOne = generatePassword();
    let randomStringTwo = generatePassword();
    passwordOne.textContent = randomStringOne;
    passwordTwo.textContent = randomStringTwo;
}


generateEl.addEventListener('click', renderPassword)