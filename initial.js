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



