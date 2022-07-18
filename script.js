const container = document.querySelector("#container");
container.classList.add("container");

function makeRows(rows, cols){
    for(i=0;i < rows*cols;i ++){
        let cell= document.createElement('div');
        cell.setAttribute("id", "cell")
        container.append(cell);
        
    }
    
}
const rows = 16;
const cols = 16;
makeRows(rows,cols);

let cells = document.querySelectorAll("#cell")
cells.forEach(cells=>cells.addEventListener("mouseenter", function(e){
    cells.classList.add("playing");
}));


