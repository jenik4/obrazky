const jahoda= document.getElementById("jahoda");
const obrazky = document.getElementsByClassName("obrazek");
[...obrazky] .forEach((img) => {
    img.onclick = () => {
jahoda.src= img.src;
}
});
