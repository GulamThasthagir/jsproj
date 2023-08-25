let title = document.querySelector("#title");
let content = document.querySelector("#content");
let submit = document.getElementById("submit");
let head = document.getElementById("head");
let head2 = document.getElementById("head2");
let maincontainer=document.getElementById("maincontainer")

let arr = [];
let arr_2 = [];
let ano = []
submit.addEventListener("click", () => {
  let maindiv = document.createElement("div");
  maindiv.setAttribute("id", "divv");
  let header = document.createElement("h1");
  let para = document.createElement("p");
  header.innerHTML = `Title:${title.value}`;
  para.innerHTML = `Content:${content.value}`;
  maindiv.appendChild(header);
  maindiv.appendChild(para);
  head.appendChild(maindiv);

  let button = document.createElement("button");
  button.setAttribute("id", "button");
  button.setAttribute('class','btns')
  button.innerText = "edit";
  maindiv.appendChild(button);

  let deletes = document.createElement("button");
  deletes.setAttribute("id", "deletes");
  deletes.innerText = "delete";
  maindiv.appendChild(deletes);

  arr.push(header.innerHTML);
  arr.push(para.innerHTML);
  function pass(title, content){
    let store = {
      title,
      content,
    };
    arr_2.push(store);
  }
  pass(title.value, content.value);

  ano.push(maindiv)
  deletes.addEventListener("click", () => {
    maindiv.parentNode.removeChild(maindiv);
  });

  const buttons = document.querySelectorAll('.btns')
    buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{

    let div_box = document.createElement("div");
    div_box.setAttribute("id", "div_boxx");

    div_box.style.display="block";
    head.style.display="none"
    maincontainer.style.display="none"

    let input_box = document.createElement("input");
    input_box.type = "text";
    input_box.value = arr_2[index].title

    let second_box = document.createElement("input");
    second_box.type = "text";
    second_box.value = arr_2[index].content;

    let update_btn = document.createElement("button");
    update_btn.innerHTML = "Update";

    div_box.appendChild(input_box);
    div_box.appendChild(second_box);
    div_box.appendChild(update_btn);
    head2.appendChild(div_box);

    update_btn.addEventListener("click",()=>{
        // alert("hi")
        // console.log(second_box.value);
        arr_2[0].title = input_box.value
        arr_2[0].content = second_box.value
        div_box.style.display="none";
    head.style.display="block"
    maincontainer.style.display="block"

    })
  });
})

  title.value = "";
  content.value = "";
});
