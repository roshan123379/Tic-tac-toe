const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
const div4 = document.getElementById("div4")
const div5 = document.getElementById("div5")
const div6 = document.getElementById("div6")
const div7 = document.getElementById("div7")
const div8 = document.getElementById("div8")
const div9 = document.getElementById("div9")

const para = document.getElementById("para")

let par = "Player O Turn"
let turn = "X";
function change(){
    return turn ==="X"?"O":"X"
    
}
function parchange(){
    return par ==="Player O Turn"?"Player X Turn":"Player O Turn"
}

function win(box1,box2,box3){
    if( box1.innerText!="" && box2.innerText!="" && box3.innerText!="" && box1.innerText==box2.innerText && box2.innerText==box3.innerText){
        if(box1.textContent=="X"){
            para.innerHTML="X won the match yeahh!!"
            setTimeout(() => {
                para.innerHTML=""
            }, 2000);
            
            setTimeout(() => {
                reset()
            }, 2000);
               
        }
        else if(box1.textContent="O"){
            para.innerHTML="O won the match yeahh!!"
            setTimeout(() => {
                para.innerHTML=""
            }, 2000);
            
            setTimeout(() => {
                reset()
            }, 2000);
        }
        
    }
    
}
function reset(){
    divs.forEach((div)=>div.innerHTML="")
    
}
const divs = document.querySelectorAll(".divs")
divs.forEach((div)=>{
    div.addEventListener("click",()=>{
        if(div.textContent===""){
            div.textContent=turn
            turn=change();
            para.innerHTML=par
            par=parchange()
            
        }
        win(div1,div2,div3)
        win(div1,div4,div7)
        win(div7,div8,div9)
        win(div9,div6,div3)
        win(div2,div5,div8)
        win(div4,div5,div6)
        win(div1,div5,div9)
        win(div3,div5,div7)

        
    })
})

