document.addEventListener("DOMContentLoaded", function() {
    let rangeInput = document.getElementById("rangeInput");
    let sliderValue =  document.getElementById("sliderValue");
    let dislayText = document.getElementById("displayText");
    let upperCase = document.getElementById("includeUppercase");
    let lowerCase = document.getElementById("includeLowercase");
    let numbers  =document.getElementById("includeNumbers");
    let symbols = document.getElementById("includeSymbols");
    let generateBtn =  document.getElementById("generate");


    rangeInput.addEventListener("input",()=>{
        sliderValue.textContent = rangeInput.value;
        sliderValue.style.color = "#b2ff9e";
    
        changecolor();
    });

    generateBtn.addEventListener("click",()=>{
        dislayText.value = generatePassword();
    });


    // Main function

    function generatePassword(){
        let password = "";
        const length = rangeInput.value;
        const includeLowercase = lowerCase.checked;
        const includeUppercase = upperCase.checked;
        const includeNumbers = numbers.checked;
        const includeSymbols = symbols.checked;

        const genArray = [];
        if(includeUppercase){
            genArray.push(randomCapital);
        }
        if(includeLowercase){
            genArray.push(randomSmall);
        }
        if(includeNumbers){
            genArray.push(randomNumber);
        }
        if(includeSymbols){
            genArray.push(randomChars);
        }
        if(genArray.length===0){
            alert("Please select at least one char type.")
            return "";
        }
        for(let i = 0;i<length; i++){
            const random = genArray[Math.floor(Math.random()*genArray.length)];
            password += random();
        }
        return password;

    }
    function changecolor(){
        const pass = generatePassword();
        dislayText.value = pass;
        dislayText.style.color = "#b2ff9e";
    }
    changecolor();

    function randomNumber(){
        let numbers = [0,1,2,3,4,5,6,7,8,9];
        return numbers[Math.floor(Math.random()*numbers.length)];
        
    }
    function randomChars(){
        let specialChars = "{}()!@$%&~:;[]`?";
        return specialChars[Math.floor(Math.random()*specialChars.length)];
        
    }
    function randomCapital(){
        let capitalChars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return capitalChars[Math.floor(Math.random()*capitalChars.length)];
    }

    function randomSmall(){
        let smallChars="abcdefghijklmnopqrstuvxyz";
        return smallChars[Math.floor(Math.random()*smallChars.length)]
    }
    
    const copybtn = document.getElementById("copyIcon")

    function copyText(){
        let password = document.getElementById("displayText")

        navigator.clipboard.writeText(password.textContent).then(function (){
            alert(`Your password ${password.textContent} is copied to clipboard`)
        });

    };

    copybtn.addEventListener("click",copyText);

});
