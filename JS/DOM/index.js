// document.write("Hello from js")

function changeBackground(color){
    document.body.style.backgroundColor = color
}

// function changeBackgroundWhite(){
//     document.body.style.backgroundColor = 'white'
// }

// const darkButton = document.getElementById('dark-mode-button')
// console.log(darkButton);

// darkButton.addEventListener('click',function(){
//     changeBackground('black')
// })

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click',()=> {
    const currentColor = document.body.style.backgroundColor;

    if(!currentColor || currentColor == 'white'){
        changeBackground('black');
        themeButton.innerText = 'Light Mode'
    }
    else{
        changeBackground('white')
        themeButton.innerText = 'Dark Mode'
    }

})