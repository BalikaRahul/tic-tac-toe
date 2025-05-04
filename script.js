let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [[0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ];
const resetGame=()=>{
            turnO=true;
            enableBoxes();
            msgContainer.classList.add("hide");
          };

          
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};
const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    msgContainer.classList.add("hide");
};
const showWinner =(winner)=>{
    msgContainer.innerText = `congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for (pattern of winPatterns) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;


        if(post1val!=""&& post2val!="" && post3val!=""){
            if(post1val=== post2val && post2val===post3val){
                console.log("winner is ",post1val);
                showWinner(post1val);
            }
        }
     }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
