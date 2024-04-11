//HENT
const SubmitValue = document.querySelector("#SubmitValue");
console.log(SubmitValue.value);

// SEND
SubmitValue.addEventListener("click", () => {
    //HENT
    const InputValue = document.querySelector("#InputValue").value;
    console.log(InputValue);

    //HENT
    const DisplayValue = document.querySelector("#DisplayValue");
    console.log(DisplayValue);

    //HENT
    const FromValue = document.querySelector("#FromValue").value;
    console.log(FromValue);

    //HENT
    const ToValue = document.querySelector("#ToValue").value;
    console.log(ToValue);

    let result;

    if (FromValue === "CM" & ToValue === "M") {
        result = InputValue / 100;
    } else if (FromValue === "CM" & ToValue === "KM") {
        result = InputValue / 100000;
    } else if (FromValue === "M" & ToValue === "CM") {
        result = InputValue * 100;
    } else if (FromValue === "M" & ToValue === "KM") {
        result = InputValue / 1000;
    } else if (FromValue === "KM" & ToValue === "CM") {
        result = InputValue * 100000
    } else if (FromValue === "KM" & ToValue === "M") {
        result = InputValue * 1000
    } else {
        console.log("Du må velge en ny måleenhet")
    }

    //MODIFISERER
    DisplayValue.textContent = result;
});