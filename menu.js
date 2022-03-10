let  fontSizeInput = document.querySelector(".font_size_input");
let  fontFamilyInput = document.querySelector(".font_family_input");

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