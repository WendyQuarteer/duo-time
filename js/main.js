const oldPage = document.body.innerHTML;
//challengebox
const button = document.getElementById('button');
const input = document.getElementById('input');

const handleClick = () => {
    input.value = 'Hello World';
};

button.addEventListener('click', handleClick);

//fix margin of header with big picture
document.getElementsByTagName('header')[0].style.marginBottom = "9%";

//fix 4th description word
document.getElementsByTagName('li')[3].innerText ="Down to earth";
// fix no label for input
let challengebox = document.getElementById('challengebox');
let label = document.createElement("label");

label.setAttribute('for', 'checkbox');


challengebox.appendChild(label);

//fix favicon
let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'pug.png?';

//change celebrity text
let change = document.getElementById('celebrityText');
change.innerText = "Famous actor known from Fast & Furious series and jumanji"

//change avatar into hobbies section
let title = document.getElementsByClassName('him')[0];
title.innerText = "Hobbies";
let remove = document.getElementsByClassName('remove')[0];
remove.style.display = "none";

let tuxedo = document.getElementsByClassName('change')[0];
tuxedo.style.display = "none";
// make it a hobbies section
let hobbieSection = document.getElementById('hobbiesectie');
let hobbies = document.createElement('div');
let ol = document.createElement("ol");
let hobbiesArr = ['Gaming', 'playing Guitar', 'watching football', 'spend time with friends']

for (let i of hobbiesArr){
    let li = document.createElement('li');
    li.innerHTML = i;
    ol.appendChild(li);
}
hobbieSection.appendChild(hobbies);
hobbies.appendChild(ol);

// change general styling
//background color
document.body.style.backgroundColor = "black"

//text color
document.body.style.color = "#0909e1";

//header
document.getElementById("header").style.color = "#0909e1"

//main img section
document.getElementsByClassName('mainImg')[0].style.Color = "#0909e1";

//card deck text color
document.getElementById('spirit').classList.remove('text-white');
document.getElementById('favSport').classList.remove('text-white');
document.getElementById('color').classList.remove('text-white');
document.getElementsByClassName('rounded-circle')[2].style.border ="2px solid blue";

//fictional character
document.getElementsByClassName('media')[0].style.backgroundImage = "url('images/starWarsBackground.jpg')";
document.getElementsByClassName('media')[0].style.color = "#0909e1";

// favorite celebrity
document.getElementsByClassName('media')[1].style.backgroundImage = "url('images/ffbackground.jpg')";
document.getElementsByClassName('media')[1].style.backgroundRepeat = "no-repeat";
document.getElementsByClassName('media')[1].style.backgroundSize = "cover";
document.getElementsByClassName('media')[1].style.color = "#0909e1";

//hobby section styling
document.getElementsByClassName('media')[2].style.backgroundImage = "url('images/hobbybackground.jpg')";
document.getElementsByClassName('media')[2].style.backgroundRepeat = "no-repeat";
document.getElementsByClassName('media')[2].style.backgroundSize = "cover";
document.getElementsByClassName('media')[2].style.color = "#0909e1";

//Challenge box styling
document.getElementById('challengebox').style.textAlign = "center";
document.getElementsByTagName('p')[6].innerText = "When pressing the button make 'Hello world' appear.";
document.getElementById('input').style.border =  "2px dotted #0909e1";
document.getElementById('input').style.borderRadius =  "20%";
document.getElementById('input').style.backgroundColor = "rgba(9,9,255,0.3)";
document.getElementById('input').style.margin = "1%";
document.getElementById('input').style.color = "#0909e1";

//challenge box button styling
document.getElementById('button').style.border = "2px solid #0909e1";
document.getElementById('button').style.borderRadius = "50%";
document.getElementById('button').style.backgroundColor = "black";
document.getElementById('button').style.color = "#0909e1";

// change footer
document.getElementsByTagName('footer')[0].style.color = "#0909e1";
document.getElementsByTagName('footer')[0].style.backgroundColor = "black";
document.getElementsByClassName('wenkesPage')[0].style.backgroundColor = "black";

//change button
document.getElementById('wendy').style.backgroundColor = "transparent";
document.getElementById('wendy').style.border = "2px dashed #0909e1";
document.getElementById('wendy').style.borderRadius = "50%";
document.getElementById('wendy').style.color = "#0909e1";

//hover effect on button
document.getElementById('wendy').addEventListener('mouseover', ()=>{
    document.getElementById('wendy').style.backgroundColor = "#0909e1";
    document.getElementById('wendy').style.color =  "black";
    document.getElementById('wendy').style.border = "4px double transparent";
    document.getElementById('wendy').style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
    document.getElementById('wendy').style.borderImageSlice = "1";
    document.getElementById('wendy').style.borderRadius = "";
})

//mouse out effect on button
document.getElementById('wendy').addEventListener('mouseout', () =>{
    document.getElementById('wendy').style.backgroundColor = "transparent";
    document.getElementById('wendy').style.border = "2px dashed #0909e1";
    document.getElementById('wendy').style.borderRadius = "50%";
    document.getElementById('wendy').style.color = "#0909e1";
})

//reset button
const newPage = document.body.innerHTML;
addButton();
let old = false;

function addButton(){
    let Button = document.createElement('button');
    document.body.appendChild(Button);
    Button.innerText = '❓';
    Button.style.position = 'fixed';
    Button.style.width = '30px';
    Button.style.height = '30px';
    Button.style.left = '10px';
    Button.style.top = '30px';
    Button.style.backgroundColor = "#0909e1";
    Button.style.borderRadius = '50%';
    Button.addEventListener('click', () =>{
        console.log(old);
        if(old){
            document.body.innerHTML = newPage;
            document.body.style.background = 'black';
            document.body.style.color = '#0909e1';
        }else{
            document.body.innerHTML = oldPage;
            document.body.removeAttribute('style');
        }
        old = !old;
        addButton();
    });
}
