const InputBox = document.querySelector("#InputBox");
console.log(InputBox.value);

const InputButton = document.querySelector("#InputButton");
InputButton.addEventListener("click", () => {
    console.log(InputBox.value);

    const DisplayBox = document.querySelector("#DisplayBox");
    console.log(DisplayBox.value);

});