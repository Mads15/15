const SubmitValue = document.querySelector("#SubmitValue");
console.log(SubmitValue.value);

SubmitValue.addEventListener("click", () => {
    const InputValue = document.querySelector("#InputValue").value;
    console.log(InputValue.value);

    const DisplayValue = document.querySelector("#DisplayValue");
    console.log(DisplayValue.value);

    DisplayValue.textContent = InputValue;

    const FromValue = document.querySelector("#FromValue").value;
    console.log(FromValue.value);

    const ToValue = document.querySelector("#ToValue").value;
    console.log(ToValue.value);

});