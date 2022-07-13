/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.a = 60;
    this.b = 15;
  
    this.getSum = (a, b) => {
      return `Sum: ${this.a + this.b} `;
    };
  
    this.getSubtraction = (a, b) => {
      return `Subtraction: ${this.a - this.b}`;
    };
  
    this.getMultiplication = (a, b) => {
      return `Multiplication: ${this.a * this.b}`;
    };
  
    this.getDivision = (a, b) => {
      return `Division: ${this.a / this.b}`;
    };
}
  
  const calculation = new Calculator();
  console.log(calculation.getSum());
  console.log(calculation.getSubtraction());
  console.log(calculation.getMultiplication());
  console.log(calculation.getDivision());