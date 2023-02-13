const inputEl = document.querySelector("#card-input")
const paraA = document.querySelector(".para1")
const paraB = document.querySelector(".para2")
const paraC = document.querySelector(".para3")
const convertBtn = document.querySelector("#convert-btn")

convertBtn.addEventListener("click", function() {
    let feet = inputEl.value*3.281
    let meter = inputEl.value/3.281
    let gallon = inputEl.value*0.264
    let liter = inputEl.value/0.264
    let pound = inputEl.value*2.204
    let kilogram = inputEl.value/2.204
    if (inputEl.value === "1") {
        paraA.textContent = `${inputEl.value} meter = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meter.toFixed(3)} meters`
        paraB.textContent = `${inputEl.value} liter = ${gallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${liter.toFixed(3)} liters`
        paraC.textContent = `${inputEl.value} kilo = ${pound.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilogram.toFixed(3)} kilos`
    } else {
        paraA.textContent = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meter.toFixed(3)} meters`
        paraB.textContent = `${inputEl.value} liters = ${gallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${liter.toFixed(3)} liters`
        paraC.textContent = `${inputEl.value} kilos = ${pound.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilogram.toFixed(3)} kilos`
    }
    
})
