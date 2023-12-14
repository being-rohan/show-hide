const cl=console.log;

const btn = document.getElementById("btn");
const box = document.getElementById("box");

//------------1--------------
// let jack = true;
// const hideBox = function(){
// if(jack){
//     cl(this);
//          this.innerHTML = "Show Box";
//        // box.classList.add("d-none")
//         box.classList.toggle("d-none")
//         //jack = false;
//         jack = !jack;
// }else{
//     this.innerHTML = "Hide Box"
//    // box.classList.remove("d-none")
//     box.classList.toggle("d-none")
//   //  jack = true;
//     jack = !jack;
// }
   
// }

//----------2----------
// let jack = true;
// const hideBox = function(){
// if(jack){
//          this.innerHTML = "Show Box";
// }else{
//     this.innerHTML = "Hide Box"
// }
// box.classList.toggle("d-none")
// jack = !jack;
// }
   
//---------------3---------------
let jack = true;
const hideBox =function(){
    jack ? this.innerHTML = "Show Box" : this.innerHTML = "Hide Box";
    box.classList.toggle("d-none");
    jack = !jack;
}
btn.addEventListener("click" , hideBox)

//###################EVENT>TARGET###############################


const btn1 = document.getElementById("btn1");
const box1 = document.getElementById("box1");

//--------1-----------
// const toggleBox = eve => {
//    if(jack){
//     eve.target.innerHTML = "Show Box"
//    }else{
//     eve.target.innerHTML= "Hide Box"
//    }
//    box1.classList.toggle("d-none");
//    jack = !jack;
// }


//---------2--------
const toggleBox = eve =>{
    jack ? eve.target.innerHTML = "Show Box" : eve.target.innerHTML ="Hide Box";
    box1.classList.toggle("d-none");
    jack = !jack;
}

btn1.addEventListener("click", toggleBox)
