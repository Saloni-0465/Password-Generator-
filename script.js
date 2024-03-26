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
    //selectors
    // const strength = document.querySelector(".strength");
    // const bar1 = document.getElementById("one");
    // const bar2 = document.getElementById("two");
    // const bar3 = document.getElementById("three");
    // const bar4 = document.getElementById("four");
    
    // const checkboxesChecked = () => {
    //     const arr = [];
    //     if (upperInput.checked) {
    //         arr.push("1");
    //     }
    //     if (lowerInput.checked) {
    //         arr.push("2");
    //     }
    //     if (numberInput.checked) {
    //         arr.push("3");
    //     }
    //     if (specialInput.checked) {
    //         arr.push("4");
    //     }
    
    //     return arr.length;
    // };
    
    // const strengthBox = () => {
    //     if (totalChar.value < 8 || checkboxesChecked() <= 2) {
    //         strength.textContent = "WEAK";
    //         bar1.style.backgroundColor = "darkgoldenrod";
    //         bar2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    //         bar3.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    //         bar4.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    //     }
    //     if (totalChar.value >= 8 && checkboxesChecked() === 3) {
    //         strength.textContent = "MEDIUM";
    //         bar1.style.backgroundColor = "darkgoldenrod";
    //         bar2.style.backgroundColor = "darkgoldenrod";
    //         bar3.style.backgroundColor = "darkgoldenrod"
    //         bar4.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    
    //     }
    //     if (totalChar.value >= 8 && checkboxesChecked() === 4) {
    //         strength.textContent = "STRONG";
    //         bar1.style.backgroundColor = "darkgoldenrod";
    //         bar2.style.backgroundColor = "darkgoldenrod";
    //         bar3.style.backgroundColor = "darkgoldenrod";
    //         bar4.style.backgroundColor = "darkgoldenrod";
    //     }
    // };

    
    const copybtn = document.getElementById("copyIcon")

    function copyText(){
        let password = document.getElementById("displayText")

        navigator.clipboard.writeText(password.textContent).then(function (){
            alert(`Your password ${password.textContent} is copied to clipboard`)
        });

    };

    copybtn.addEventListener("click",copyText);

});
