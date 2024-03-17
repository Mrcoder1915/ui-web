let sections = document.querySelectorAll('section');

window.onscroll = () =>{
    sections.forEach (sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
           sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate')
        }
    })
}

const form = document.querySelector('form');
const email = document.querySelector('#email');
const fullname = document.querySelector('#name');
const pnumber = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
// this is a fucntion for sending email
function sendEmail() {
    
    const fullmessage = `Full name: ${fullname.value}<br> Email: ${email.value}<br>
    phone number: ${pnumber.value}<br> subject: ${subject.value} <br> message: ${message.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "samcuty01@gmail.com",
        Password : "97E07C4A6EB20EA6580C4821F355084FC90B",
        To : "samcuty01@gmail.com",
        From : "samcuty01@gmail.com",
        Subject : subject.value,
        Body : fullmessage
    }).then(
      message => {
        if(message == 'OK'){
            Swal.fire({
                title: "success!",
                text: "message sent!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
     const items = document.querySelectorAll('.item')

     for(const item of items ){
        if(item.value === ""){
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }
        if(items[1].value != ""){
            checkemail()
          }
        items[1].addEventListener("keyup", () =>{
            checkemail()
        })
        item.addEventListener("keyup", () => {           
            if(item.value != ""){
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }else{
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
          
     }
}
// this is for email validation

function checkemail(){
    const regx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
    const emailerr = document.querySelector('.error-txt.err');
    
    if(!email.value.match(regx)){
          email.classList.add('error')
          email.parentElement.classList.add('error')
         if(email.value != ""){
            emailerr.innerText = "Enter a valid email";
         }else{
            emailerr.innerText = "Email can't be blank";
        }
    }else{
          email.classList.remove('error')
        email.parentElement.classList.remove('error')
    }
}
// this is for cheking the inputs
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()
    if(!fullname.classList.contains("error") && !email.classList.contains("error") &&
    !subject.classList.contains("error") && !pnumber.classList.contains("error") &&
    !message.classList.contains("error") ){
        sendEmail()
    }
    
})
// this is for login and register form
const register = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const mainContainer = document.querySelector('.loginContainer');

register.addEventListener('click', () => {
    mainContainer.classList.add('active')
})
loginlink.addEventListener('click', () => {
    mainContainer.classList.remove('active')
})
// dropDown menu responsive 
const menuButtom = document.querySelector('.menu-button')
const dropDownMenu = document.querySelector('.toggle')

menuButtom.onclick = () => {
    dropDownMenu.classList.toggle('open')
}
$(document).ready(function(){
    $(".navigation,.menu-button,.ui").addClass("animate__animated animate__bounce");
});
// this for typewriting
function sleep(ms){
    return new Promise((resolve) => { 
        setTimeout(resolve,ms)
    });
};
const words = ["HTML","CSS","JAVASCRIPT"];
const typing = document.querySelector('.typing');
let sleeptime = 100;
let curphraseindex = 0;

const writeloop = async () => {
    while(true){
        let curword = words[curphraseindex];
        for(let i = 0;i <= curword.length;i++){
            typing.innerText = curword.substring(0,i);
            await sleep(sleeptime);
        }
        await sleep(sleeptime * 10);

        for(let i = curword.length;i >= 0;i--){
            typing.innerText = curword.substring(0,i);
            await sleep(sleeptime);
    }
        await sleep(sleeptime * 5);
   
    if(curphraseindex === words.length - 1){
        curphraseindex = 0;
    }else{
        curphraseindex++;
    }
};
};
writeloop();