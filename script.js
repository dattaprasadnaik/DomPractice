// const h1 = document.querySelector("#title");
// h1.textContent = "Welcome to H1 tag";

// document.querySelector("#btn").addEventListener("click", () => {
// document.querySelector("body").style.backgroundColor = "lightblue"
// });


// const btn =  document.querySelector("#btn");
// const body = document.querySelector("body");

// btn.addEventListener("click", () => {
//     body.style.backgroundColor = "lightblue";
// });btn

// const input = document.getElementById('username')
// const output = document.getElementById('output')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', ()=>{
//     let user = input.value
//     output.textContent = user;
// })


// const message = document.getElementById('message');
// const btn = document.querySelector('button');

// btn.addEventListener('click', ()=>{
//     if(message.style.display === 'block'){
//         message.style.display = 'none';
//     }
//     else{
//         message.style.display = 'block';
//     }
// })


// const list = document.getElementById('list');
// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     const li = document.createElement('li');
//     li.textContent = 'Banana';
//     list.appendChild(li);
// })



// const btn = document.querySelector('button');

// btn.addEventListener('click', ()=>{
//     btn.parentElement.remove()
// })


// let add = document.querySelector(".add")
// let sub = document.querySelector(".sub")
// let h1 = document.querySelector("h1")
// let num = 0
// add.addEventListener("click", (e) => {
// e.preventDefault()
// num += 1;
// h1.innerHTML = num;
// })
// sub.addEventListener("click", (e) => {
// e.preventDefault()
// num -= 1;
// h1.innerHTML = num;
// }).ans 7


// const textarea = document.querySelector("textarea");
// const char = document.querySelector(".char");

// textarea.addEventListener("input", ()=>{
//     let count = textarea.value.length;
//     console.log(count)
//     char.textContent = `Characters :${count}`
// })



// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const list = document.querySelector("ul");

// btn.addEventListener("click", ()=>{
//     let inputValue = input.value

//     const li =document.createElement("li")
//         li.textContent =inputValue
    
//         list.appendChild(li)
// })



// const img = document.querySelector("img");
// const btn = document.querySelector("button");


//    const images = [
// "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
// "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
// "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150",
// "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&h=150",
// "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
// ]


// let index = 0;
// img .src = images[index];

// btn.addEventListener("click", ()=>{
//     index++;
//     img.src = images[index];
//     if(index >= images.length){
//         index=0;
//     }
// })




// const nameInput = document.getElementById("name");
// const courseInput = document.getElementById("course");
// const studentsDiv = document.getElementById("students");
// const addBtn = document.getElementById("addBtn");
// let students =[]

// addBtn.addEventListener("click",()=>{
//     let name = name.Input.value.trim()
//     let course = courseInput.value.trim()

//     if (name=="" || course === "") return;

//     students.push({ name, course });

//     console.log(students);
//     nameInput.value =""
//     courseInput.value = ""

// })

// function renderStudents(){
//     studentsDiv.innerHTML = ""

    
// }


// const h1 = document.querySelector("#title");
// h1.textContent = "Welcome To h1 tag";
// console.log(h1)


// const btn = document.querySelector("#btn")


// btn.addEventListener("click", ()=>{
//     if(document.body.style.backgroundColor === "yellow"){
//         document.body.style.backgroundColor = "white";
//         btn.textContent ="hello"
//         btn.style.backgroundColor = "green"
//     }
//     else{
//         document.body.style.backgroundColor="yellow"
//         btn.textContent = "Goodbye"
//         btn.style.backgroundColor = "white"
//     }
// })



// const input = document.querySelector("#username");
// const output = document.querySelector("#output");
// const btn = document.querySelector("#btn")


// btn.addEventListener("click", ()=>{
//     let user = input.value
//     output.textContent = user
   
    
// })



// const message = document.querySelector("#message")
// const btn = document.querySelector("button")

// btn.addEventListener("click", ()=>{
//     if(message.style.display === "block"){
//         message.style.display = "none"
//         btn.textContent = "I am gone"
//     }
//     else{
//         message.style.display = "block"
//         btn.textContent = "I am here"
//     }
// })


// const li = document.getElementById("list")
// const btn = document.querySelector("button")
// const input = document.querySelector("input")

// btn.addEventListener("click",()=>{
//     const list = document.createElement("li")
//     list.textContent = input.value
//     li.appendChild(list)
// })



// const btn = document.querySelector("button")

//     btn.addEventListener("click", ()=>{ 

//    btn.parentElement.remove()
//     })


// const add = document.querySelector("#plus");
// const sub = document.querySelector("#minus");
// const h1 = document.querySelector("h1");
// let num = 0;

// add.addEventListener("click", ()=>{
//     num++;
//     h1.textContent = num;

// });

// sub.addEventListener("click", ()=>{
//     num--;
//     h1.textContent = num;
// })


 

// const btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     if(document.body.style.backgroundColor === "black"){
//         document.body.style.backgroundColor = "white"
//         btn.textContent = "lightmode"
        
//     }
//     else{
//     document.body.style.backgroundColor = "black"
//     btn.textContent = "Darkmode"
//     }
// })