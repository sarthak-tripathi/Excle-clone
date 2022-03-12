let  fontSizeInput = document.querySelector(".font_size_input");
let  fontFamilyInput = document.querySelector(".font_family_input");
let boldIcon = document.querySelector(".fa-bold");
let underlineIcon = document.querySelector(".fa-underline");
let italicIcon = document.querySelector(".fa-italic");
let alignmentContainer = document.querySelector(".alignment_container");
let textColorInput = document.querySelector(".fa-tint");
let backgroundInput = document.querySelector(".fa-fill-drip");
let textColorHInput = document.querySelector(".text_color");
let backgroundHInput = document.querySelector(".background_color");


//click to select color
textColorInput.addEventListener("click", function(e){
    textColorHInput.click(); 
})

textColorHInput.addEventListener("change" ,function(e){

    let color = textColorHInput.value;
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
    tobechangedCell.style.color = color;

})


backgroundInput.addEventListener("click", function(e){
    backgroundHInput.click(); 
})

backgroundHInput.addEventListener("change" ,function(e){

    let color = backgroundHInput.value;
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
    tobechangedCell.style.backgroundColor = color;

})
















//change
fontSizeInput.addEventListener("change",function(){
    let fontSize = fontSizeInput.value;
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
    // change font size
    tobechangedCell.style.fontSize = fontSize + "px";
})
//select font family

fontFamilyInput.addEventListener("change",function(){
    let fontFamily = fontFamilyInput.value;
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
        // change font size
        tobechangedCell.style.fontFamily = fontFamily;
})

boldIcon.addEventListener("click", function(){
    
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
        // change font size
    tobechangedCell.style.fontWeight = "bold";
    //add shadow when the bold button is clicked
    boldIcon.classList.add("selected");
})

underlineIcon.addEventListener("click",function(){

    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
        // change font size
    tobechangedCell.style.textDecoration = "underline";
    //add shadow when the bold button is clicked
    underlineIcon.classList.add("selected");

})

italicIcon.addEventListener("click",function(){

    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
        
        // change font size
    tobechangedCell.style.fontStyle = "italic";
    //add shadow when the bold button is clicked
    italicIcon.classList.add("selected");

})

alignmentContainer.addEventListener("click" ,function(e){
    // console.log(e.target)

    if (e.target !== alignmentContainer) {
        let classesArr = e.target.classList;
        let hAlignment = classesArr[classesArr.length - 1];
        let address = addressInput.value;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector
            (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        // change fontSize property
        tobeChangedCell.style.textAlign = hAlignment;;
        //add shadow when the bold button is clicked
        // underlineIcon.classList.add("selected");
        e.target.classList.add("selected");
    }

})

//text color

