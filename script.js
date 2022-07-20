function populateGrid(rows, cols){
    let wholeGrid = document.querySelector("#container");
  
    for(i=0;i < rows*cols;i ++){
        let cell= document.createElement('div');
        cell.setAttribute("id", "cell");
        container.append(cell);
        cell.addEventListener("mousedown", hovering);
        cell.addEventListener("mouseover", hovering);
    }
    wholeGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    wholeGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
}
   

// const container = document.querySelector("#container");
// container.classList.add("container");

// function makeRows(rows, cols){
//     for(i=0;i < rows*cols;i ++){
//         let cell= document.createElement('div');
//         cell.setAttribute("id", "cell")
//         container.append(cell);
        
//     }
    
// }
populateGrid(16,16);

//add event to all cells when hovering

function hovering(event){
    const cells = document.querySelectorAll("#cell");
    cells.forEach(cells => cells.addEventListener("dragover", function (e){
        event.preventDefault();
        cells.classList.add("playing")
    }));
};

// function hovering(event){
//     const cells = document.querySelectorAll("#cell");
//     if (event.type == "mouseover" && event.type !== "mousedown"){
//         return;
//     }
//     else {
//         cells.forEach(cells => cells.addEventListener("mouseover", function(e){
//             cells.classlist.add("playing");
//         }))
//         };
//     }
//To set button1 for changing of grid size
let button1 = document.querySelector("#button1");
button1.addEventListener("click", changeSize);
button1.innerHTML = "Change Grid Size";

function changeSize(rows,cols){
    let newRow = prompt("What is your desired number of rows/columns?")
    if (newRow > 100){
        alert("Maximum number of rows you can have is 100. Please input a smaller number!")
    }
    else{
        let cells = document.querySelectorAll("#cell");
        cells.forEach((div) =>div.remove());
        let newCols = newRow;
        hovering(event)
        return populateGrid(newRow,newCols);

    }
   
};

//Reset button for grid
let button2 = document.querySelector("#button2");
button2.addEventListener("click",reset);
button2.innerHTML = "Reset";
function reset(){
    let cells = document.querySelectorAll("#cell");
    cells.forEach(cell => cell.classList.remove('playing'));
};


let button3 = document.querySelector("#button3");

