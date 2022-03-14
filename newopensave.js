let downloadBtn = document.querySelector(".fa-save");
let openBtn =   document.querySelector(".fa-envelope-open");
let openInput  =   document.querySelector(".open_input");


downloadBtn.addEventListener("click", function(e){
    //anchor create
    let a = document.createElement("a");
    //file put -> db array
    // data link form mei href ke andr add ho jayega
    var StringCode = encodeURIComponent(JSON.stringify(db));
    var dataStr = "data:text/json;charset=utf-8," + 
    StringCode;
    
    a.href = dataStr;
    
    a.download = "file.json";

    //anchor click
    a.click();
})

openBtn.addEventListener("click", function (e) {
    openInput.click();
})

openInput.addEventListener("change", function (e) {
    // files array
    let filesArr = openInput.files;
    console.log(filesArr);
    // first file select
    // first file get  
    let file = filesArr[0];
    // fileReader -> browser inbuilt
    const reader = new FileReader();
    // read as text 
    reader.readAsText(file);
    //when file get read load event get call
    reader.addEventListener('load', (event) => {
        // img.src = event.target.result;
        let JSONdata = JSON.parse(event.target.result);
        db =JSONdata;
        console.log(db); 

    });

})

function setUI(){
    for(let i = 0; i < 100;i++){
        let rowArr = [];
        for (let j = 0; j < 26; j++){
            //set all the property on ui with matchingrid,cid
            let cellObject = db[i][j];


            let tobeChangedCell = document.querySelector
            (`.grid .cell[rId='${i}'][cId='${j}']`);






        }
        db.push(rowArr);
    
    
    }
}