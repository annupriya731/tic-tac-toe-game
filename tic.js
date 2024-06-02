var boxes = document.querySelectorAll(".box");
var resetbtn = document.querySelector("#reset-btn");
var newgamebtn = document.querySelector("#new-btn");
var msgcontainer= document.querySelector(".msg-container");
var msg = document.querySelector("#msg");

let turno = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetgame= () => {
    turno= true;
    enabledboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turno) {
            box.innerText = "o";
            turno = false;
        } else {

            box.innerText = "X";
            turno = "true";

        }
   


box.disabled = true;
checkwinner();
});

});

const disabledboxes = () => {
    for( let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes = () => {
    for( let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
const checkwinner = () => {
    for (let pattern of winpatterns) {

    
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val !=""&&pos2val!= "" &&pos3val != ""){
        if(pos1val===pos2val&& pos2val === pos3val){

       
        console.log("winner",pos1val);
        showwinner(pos1val);
    }
}
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
