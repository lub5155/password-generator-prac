let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let sml="abcdefghijklmnopqrstuvwxyz"
let dgt="0123456789"
let spl="!@#$%^&*()_+-={}[];:<>,.?/"
let length = 14;

function generate(){
    let pass=[]
    let y
    for(let i=0;i<14;i++){
        y=Math.floor(Math.random()*4)
        if(y==0){
            pass.push(cap[Math.floor(Math.random()*cap.length)])
        }
        if(y==1){
            pass.push(sml[Math.floor(Math.random()*sml.length)])
        }
        if(y==2){
            pass.push(dgt[Math.floor(Math.random()*dgt.length)])
        }
        if(y==3){
            pass.push(spl[Math.floor(Math.random()*spl.length)])
        }
    }
     pass= pass.join("");
    document.getElementById("inp").value=pass
}