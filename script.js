//create cell
// let div = document.createElement("div");
// div.setAttribute("class","cell");
// div.textContent = "A";
// let topRow = document.querySelector(".top_row");
// topRow.appendChild(div);

// A->Z
//Ascii->A

let topRow = document.querySelector(".top_row");
for(let i =0; i< 26; i++){
    let div = document.createElement("div");
    div.setAttribute("class","cell");
    div.textContent = String.fromCharCode(65+i);
    topRow.appendChild(div);

}
let leftCol = document.querySelector(".left_col");

for(let i =1; i<=100; i++){
    let div = document.createElement("div");
    div.setAttribute("class","cell");
    div.textContent =i;
    leftCol.appendChild(div);
    
}

//2-D
// grid
let grid = document.querySelector(".grid");

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
let AllGridCell = document.querySelectorAll(".grid .cell");
let addressInput = document.querySelector(".address_input");
for(let i = 0; i < AllGridCell.length; i++){

    AllGridCell[i].addEventListener("click",function(e){
        
            let rid = AllGridCell[i].getAttribute("rId");
            let cid = AllGridCell[i].getAttribute("cID");
            // alert(rid+" "+cid);
            rid = Number(rid);
            cid = Number(cid);
            // alert(String.fromCharCode(cid +65) + " " + (rid + 1));

    //     alert("Bro yu can do it...Let's go!!!!");
    // String.fromCharCode() method converts Unicode values to characters.
            addressInput.value = String.fromCharCode(cid +65) +  (rid + 1);
    })

}
// i will get the addres of that cell
// print the address in the UI -> in the address bar



