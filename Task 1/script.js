/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const converterForm = document.querySelector("form");
converterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const kilograms = document.getElementById("search");
    const pounds = kilogramsToPounds(kilograms.value);
    const grams = kilogramsToGrams(kilograms.value);
    const ounce = kilogramsToOunce(kilograms.value);
    const output = document.getElementById("output");

    output.textContent = `Pounds: ${pounds}, Grams: ${grams}, Ounce: ${ounce}`;
});

function kilogramsToPounds (kilograms) {
    return Number(kilograms) * 2.2046;
}

function kilogramsToGrams (kilograms) {
    return Number(kilograms) / 0.0010000;
}

function kilogramsToOunce (kilograms) {
    return Number(kilograms) * 35.274;
}