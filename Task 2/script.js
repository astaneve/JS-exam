/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const plusButton = document.getElementById("")

let numberCount = 0;

const button = document.getElementById("btn__element");
button.addEventListener("click", () => {
  numberCount++;
  document.getElementById("btn__state").textContent = numberCount;

});