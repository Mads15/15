SubmitValue.addEventListener("click", () => {

    const InputValue = document.querySelector("#InputValue").value;
    console.log(InputValue);

    const DisplayValue = document.querySelector("#DisplayValue");
    console.log(DisplayValue);

    const FromValue = document.querySelector("#FromValue").value;
    console.log(FromValue);

    const ToValue = document.querySelector("#ToValue").value;
    console.log(ToValue);

    let result;

    if (FromValue === "CM" && ToValue === "M") {
        result = InputValue / 100;
    } else if (FromValue === "CM" && ToValue === "KM") {
        result = InputValue / 100000;
    } else if (FromValue === "CM" && ToValue === "IN") {
        result = InputValue / 2.54;
    } else if (FromValue === "CM" && ToValue === "FT") {
        result = InputValue / 30.48;
    } else if (FromValue === "CM" && ToValue === "MI") {
        result = InputValue / 160934.4;
    
    } else if (FromValue === "M" && ToValue === "CM") {
        result = InputValue * 100;
    } else if (FromValue === "M" && ToValue === "KM") {
        result = InputValue / 1000;
    } else if (FromValue === "M" && ToValue === "IN") {
        result = InputValue * 39.37;
    } else if (FromValue === "M" && ToValue === "FT") {
        result = InputValue * 3.28084;
    } else if (FromValue === "M" && ToValue === "MI") {
        result = InputValue / 1609.34;
    
    } else if (FromValue === "KM" && ToValue === "CM") {
        result = InputValue * 100000;
    } else if (FromValue === "KM" && ToValue === "M") {
        result = InputValue * 1000;
    } else if (FromValue === "KM" && ToValue === "IN") {
        result = InputValue * 39370.1;
    } else if (FromValue === "KM" && ToValue === "FT") {
        result = InputValue * 3280.84;
    } else if (FromValue === "KM" && ToValue === "MI") {
        result = InputValue / 1.60934;
    
    } else if (FromValue === "IN" && ToValue === "CM") {
        result = InputValue * 2.54;
    } else if (FromValue === "IN" && ToValue === "M") {
        result = InputValue / 39.37;
    } else if (FromValue === "IN" && ToValue === "KM") {
        result = InputValue / 39370.1;
    } else if (FromValue === "IN" && ToValue === "FT") {
        result = InputValue / 12;
    } else if (FromValue === "IN" && ToValue === "MI") {
        result = InputValue / 63360;
    
    } else if (FromValue === "FT" && ToValue === "CM") {
        result = InputValue * 30.48;
    } else if (FromValue === "FT" && ToValue === "M") {
        result = InputValue / 3.28084;
    } else if (FromValue === "FT" && ToValue === "KM") {
        result = InputValue / 3280.84;
    } else if (FromValue === "FT" && ToValue === "IN") {
        result = InputValue * 12;
    } else if (FromValue === "FT" && ToValue === "MI") {
        result = InputValue / 5280;
    
    } else if (FromValue === "MI" && ToValue === "CM") {
        result = InputValue * 160934.4;
    } else if (FromValue === "MI" && ToValue === "M") {
        result = InputValue * 1609.34;
    } else if (FromValue === "MI" && ToValue === "KM") {
        result = InputValue * 1.60934;
    } else if (FromValue === "MI" && ToValue === "IN") {
        result = InputValue * 63360;
    } else if (FromValue === "MI" && ToValue === "FT") {
        result = InputValue * 5280;   

    } else if (FromValue === "CM" && ToValue === "CM") {
    result = InputValue;   
    } else if (FromValue === "M" && ToValue === "M") {
    result = InputValue;   
    } else if (FromValue === "KM" && ToValue === "KM") {
    result = InputValue;   
    } else if (FromValue === "IN" && ToValue === "IN") {
    result = InputValue;   
    } else if (FromValue === "FT" && ToValue === "FT") {
    result = InputValue;   
    } else if (FromValue === "MI" && ToValue === "MI") {
    result = InputValue;   
    

    
    } else {
        result = "no";
    }
    
    DisplayValue.textContent = InputValue + " " + FromValue + " is " + result + " " + ToValue;
    console.log(result)

});