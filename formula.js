for(let i = 0; i < AllGridCell.length; i++){
        AllGridCell[i].addEventListener("blur" ,function(){
            let content = AllGridCell[i].textContent;

            let address = addressInput.value;
            let ridcidObj = getRidCidFromAddress(address);
            db[ridcidObj.rid][ridcidObj.cid].value = content;
        })

}

//formula bar

formulaInput.addEventListener("keydown" , function(e){
    if(e.key == "Enter" && formulaInput.value != ""){
        //formula get 
        let cFormula =formulaInput.value;
        //address
        let addressOfTheCell = addressInput.value;
        let{rid,cid} = getRidCidFromAddress(addressOfTheCell); 
        // console.log(cFormula);

        let value =  evaluateFormula(cFormula);
        console.log(value);
        setUI(value,rid,cid);
        db[rid][cid].formula = cFormula;

    }
})

function evaluateFormula(formula){
    //( A1 + A2 ) -> ( 10 + 20 )
console.log(formula);
    let formulaEntity = formula.split(" ");
    
    for(let i = 0; i < formulaEntity.length; i++){
        
        let ascii = formulaEntity[i].charCodeAt(0);
        if(ascii >= 65 && ascii <= 90){
            
            //address se rid and cid nikalege
            let CellrcObj = getRidCidFromAddress(formulaEntity[i]);
            //db value
            let value = db[CellrcObj.rid][CellrcObj.cid].value;
            //replace in formula
            formula = formula.replace(formulaEntity[i],value);
        } 
    }
    console.log(formula);
    //evl ->evaluate
    let result = eval(formula);
    return result;

}

function setUI(value, rid, cid){
    let tobechangedCell = document.querySelector(`.grid .cell[rId='${rid}'][cId='${cid}']`);

        tobechangedCell.textContent = value;
        db[rid][cid].value = value;

}
