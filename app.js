const dog_result = document.querySelector("#dog_result");
const fox_result = document.querySelector("#fox_result");
const dog_btn = document.querySelector("#dog_btn");
const fox_btn = document.querySelector("#fox_btn");


dog_btn.addEventListener('click', getRandomDog);
fox_btn.addEventListener('click', getRandomFox);

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            if(data.url.includes('.mp4')) {
                getRandomDog();
            } 
            else {
                dog_result.innerHTML = `<img src=${data.url} />`;
            }
        });
}

function getRandomFox() {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            fox_result.innerHTML = `<img src=${data.image} />`
        });
}