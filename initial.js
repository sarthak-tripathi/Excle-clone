//create cell
// let div = document.createElement("div");
// div.setAttribute("class","cell");
// div.textContent = "A";
// let topRow = document.querySelector(".top_row");
// topRow.appendChild(div);

// A->Z
//Ascii->A

let topRow = document.querySelector(".top_row");
let leftCol = document.querySelector(".left_col");

let grid = document.querySelector(".grid");

let addressInput = document.querySelector(".address_input");
// *********menu elements********
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


for(let i =0; i< 26; i++){
    let div = document.createElement("div");
    div.setAttribute("class","cell");
    div.textContent = String.fromCharCode(65+i);
    topRow.appendChild(div);

}

for(let i =1; i<=100; i++){
    let div = document.createElement("div");
    div.setAttribute("class","cell");
    div.textContent =i;
    leftCol.appendChild(div);
    
}

//2-D
// grid

for(let i = 0 ; i<100; i++){
    let row = document.createElement("div");
    row.setAttribute("class" , "row");
    for(let j= 0; j < 26; j++){
        let div = document.createElement("div");
        div.setAttribute("class","cell");
        // div.textContent = String.fromCharCode(j+65)+(i+1);

        div.setAttribute("contentEditable","true");
        // every cell identification is required.
        div.setAttribute("rId",i);
        div.setAttribute("cId",j);
        row.appendChild(div);

    }
    grid.appendChild(row);
}
//2 wqay binding setup

let db = [];
for(let i = 0; i < 100;i++){
    let rowArr = [];
    for (let j = 0; j < 26; j++){
        let cellObject = {
            color: "black",
            backgroundColor :"white",
            fontFamily:"Courier New", 
            fontSize : 14,
            halign:"center",
            italic: false,
            underline: false,
            bold: false
        }
        rowArr.push(cellObject);
    }
    db.push(rowArr);


}


// if i will click any cell
// i will get the addres of that cell
// print the address in the UI -> in the address bar
let AllGridCell = document.querySelectorAll(".grid .cell");
for(let i = 0; i < AllGridCell.length; i++){

    AllGridCell[i].addEventListener("click",function(e){
        //previous cell address
        let  prevaddress =addressInput.value;
        if(prevaddress != ""){
            let ridcidObj = getRidCidFromAddress(prevaddress);
            // alert(ridcidObj.rid + "" + ridcidObj.cid);
            // previous-> rremove border
            let prevCell = document
                .querySelector(`.grid .cell[rid='${ridcidObj.rid}'][cid='${ridcidObj.cid}']`);
            prevCell.style.border = "0.1px solid gray";

            prevCell.style.borderRight="none";
            prevCell.style.borderTop="none";
            
        }
        
        
            let rid = AllGridCell[i].getAttribute("rId");
            let cid = AllGridCell[i].getAttribute("cID");
            // alert(rid+" "+cid);
            rid = Number(rid);
            cid = Number(cid);
            // alert(String.fromCharCode(cid +65) + " " + (rid + 1));

            
            // String.fromCharCode() method converts Unicode values to characters.
            // put address on adress bar
            addressInput.value = String.fromCharCode(cid +65) +  (rid + 1);

            //current cell styling add

            let cCell = AllGridCell[i];
            cCell.style.border = "2px solid #1B9CFC";



            // ****************** menu 2 way binding ***************

            let address = addressInput.value;
            let cellObject = db[rid][cid];  
            // font size

            let fontSize = cellObject.fontSize;
            fontSizeInput.value = fontSize;
            //boldness
            //first remove
            boldIcon.classList.remove("selected");
            italicIcon.classList.remove("selected");
            underlineIcon.classList.remove("selected");

            if(cellObject.bold){
                boldIcon.classList.add("select")
            }

            if(cellObject.italic){
                italicIcon.classList.add("select")
            }

            if(cellObject.underline){
                underlineIcon.classList.add("select")
            }
            if(cellObject.halign){
                for(let i = 0; i < optionElements.length;i++){
                    let elementClasses = optionElements[i].classList;
                    let hAlignment = elementClasses[elementClasses.length-1];

                    if(hAlignment == cellObject.halign){
                        elementClasses.add("select");
                    }
                }
            }

           
    })

}

// first cell select

let firstCell = document.querySelector(".grid .cell[rid = '0'][cid = '0']");
firstCell.click();
firstCell.focus();
firstCell.style.border = "2px solid green";

function getRidCidFromAddress(address){
    //A->Z ,1-100
    // A20
    let AsciiValue = address.charCodeAt(0);
    let cid =AsciiValue - 65;
    let rid = Number(address.substring(1))- 1;
    return{
        rid :rid, cid : cid
    }
}



