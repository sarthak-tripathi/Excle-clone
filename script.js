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

for(let i =0; i<=100; i++){
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
        div.textContent =i + "," + j;
        row.appendChild(div);

    }
    grid.appendChild(row);
}