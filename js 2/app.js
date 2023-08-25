let login=document.getElementById("login")
let sub_div=document.getElementById("sub_div")
let namez=document.getElementById("name")
let email =document.getElementById("email")
let Password=document.getElementById("Password")


login.addEventListener("click",()=>{
    // alert("hello")
  let maindiv = document.createElement("div");
  maindiv.setAttribute("id", "divv");
  let names = document.createElement("h1");
  let para = document.createElement("p");
  let para1 = document.createElement("p");
  names.innerHTML = `Title:${namez.value}`;
  para.innerHTML = `email:${email.value}`;
  para1.innerHTML = `Password:${Password.value}`;
  maindiv.appendChild(names);
  maindiv.appendChild(para);
  maindiv.appendChild(para1);
  sub_div.appendChild(maindiv);

  let button = document.createElement("button");
  button.setAttribute("id", "button");
  button.innerText = "logout";
  maindiv.appendChild(button);

  button.addEventListener("click",()=>{
    maindiv.parentNode.removeChild(maindiv);
  })

  namez.value="",
  email.value="",
  Password.value=""
  
})

let toggle=document.getElementById("toggle")

toggle.addEventListener("click",()=>{
//   alert("hello")
toggle.innerText="Clicked Me"
})

let keyboard=document.getElementById("keyboard")
let paragrapg=document.getElementById("paragrapg")

keyboard.oninput=()=>{
 paragrapg.innerText=keyboard.value
}

let counter_value=document.getElementById("counter_value")
let increment=document.getElementById("increment")
// let decrement=document.getElementById("decrement")

let a=0

increment.addEventListener("click",()=>{
    a++
    counter_value.innerHTML=`count:${a}`
})
// decrement.addEventListener("click",()=>{
//     a-1
//     counter_value.innerHTML=`count:${a}`
    
// })
