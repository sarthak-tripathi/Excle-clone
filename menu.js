


//click to select color
textColorInput.addEventListener("click", function(e){
    textColorHInput.click(); 
})

textColorHInput.addEventListener("change" ,function(e){

    let color = textColorHInput.value;
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector(`.grid .cell[rId='${i}'][cId='${j}']`);
        
    tobechangedCell.style.color = color;
    let { rid, cid } = getRidCidFromAddress(address);
    db[rid][cid].color = color;

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
    let { rid, cid } = getRidCidFromAddress(address);
    db[rid][cid].backgroundColor = color;

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

    
    let { rid, cid } = getRidCidFromAddress(address);
    db[rid][cid].fontSize = fontSize;
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
        
        // data base mei jake value set
        let cellObject = db[ridcidObj.rid][ridcidObj.cid];
        // change font size
        if( cellObject.bold) {
            tobechangedCell.style.fontWeight ="normal" ;
            boldIcon.classList.remove("selected");
            cellObject.bold = false;
            
        }else{

            tobechangedCell.style.fontWeight ="bold" ;
            boldIcon.classList.add("selected");
            cellObject.bold = true;
            
        }
        //add shadow when the bold button is clicked



})

underlineIcon.addEventListener("click",function(){

    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobechangedCell = document.querySelector
        (`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);

    let cellObject = db[ridcidObj.rid][ridcidObj.cid];

    if( cellObject.underline) {
        tobechangedCell.style.textDecoration ="none" ;
        underlineIcon.classList.remove("selected");
        cellObject.underline = false;
        
    }else{

        tobechangedCell.style.textDecoration ="underline" ;
        underlineIcon.classList.add("selected");
        cellObject.underline = true;
        
    }
       
        
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


    let cellObject = db[ridcidObj.rid][ridcidObj.cid];
    
    if( cellObject.italic) {
        tobechangedCell.style.fontStyle ="none" ;
        italicIcon.classList.remove("selected");
        cellObject.italic = false;
        
    }else{

        tobechangedCell.style.fontStyle ="italic" ;
        italicIcon.classList.add("selected");
        cellObject.italic = true;
        
    }

        
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
        let tobechangedCell = document.querySelector
            (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        // change fontSize property
        tobechangedCell.style.textAlign = hAlignment;
        
        let optionElements = alignmentContainer.children;
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].classList.remove("selected");
        }
        //add shadow when the bold button is clicked
        // underlineIcon.classList.add("selected");
        e.target.classList.add("selected");
        // db update    
        let cellObject = db[ridcidObj.rid][ridcidObj.cid];
        cellObject.halign=hAlignment;
    }

})

//text color

