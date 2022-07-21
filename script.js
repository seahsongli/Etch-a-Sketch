function populateGrid(rows, cols){
    let wholeGrid = document.querySelector("#container");
  
    for(i=0;i < rows*cols;i ++){
        let cell= document.createElement('div');
        cell.setAttribute("id", "cell");
        container.append(cell);
        hovering();
    }
    
    wholeGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    wholeGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
}
   
populateGrid(16,16);


//add event to all cells when hovering
function hovering(){
    const cells = document.querySelectorAll("#cell");
    cells.forEach(cells => {
        cells.addEventListener("mousedown", () => {
            cells.style.backgroundColor = generateRandomColor();
        },

        cells.addEventListener("mouseover", (event) => {
            if (event.buttons == 1){
                cells.style.backgroundColor = generateRandomColor();
            }
        }))
    })
};


//function to generate random rgb colors
function generateRandomColor() {
    let red = Math.floor(Math.random()*255) + 1;
    let blue = Math.floor(Math.random()*255) + 1;
    let green = Math.floor(Math.random()*255) + 1;
    var bgColor = "rgb(" + red + "," + blue + "," + green + ")";
    return bgColor;
}



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
        hovering()
        return populateGrid(newRow,newCols);

    }
   
};

//Reset button for grid
let button2 = document.querySelector("#button2");
button2.addEventListener("click",reset);
button2.innerHTML = "Reset";
function reset(){
    let cells = document.querySelectorAll("#cell");
    cells.forEach(cells => cells.style.backgroundColor = "")
};






