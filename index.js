
const getJokes = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    const myJoke = document.querySelector('#myJoke');
    myJoke.innerHTML = data.value;


}
window.addEventListener("load", () => {
    getJokes();
})