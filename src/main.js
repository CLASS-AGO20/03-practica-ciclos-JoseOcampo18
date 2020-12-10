export default class App {

    factorial(numero){
        let multiplicacion = 1;
        for (let i = 1; i <= numero; i++) {
            multiplicacion = multiplicacion * i;
        }
        return multiplicacion;
    }

    convertirAString(numero){
            let cadena ="";
            let i = 1;

            while (i <= numero){
                    cadena += "*"; 
                    i++;
            }
            
            return cadena;
    }

    obtenerDivisibles(numero) {
        let i = 1;
        let sum = 0;
        do {
          if (numero % i == 0) {
            sum = sum + 1;
            i++;
          } else {
            i++;
          }
        } while (i <= numero);
        return sum;
      }

      elevar(numero, potencia) {
        let suma = 1;
        for (let i = 1; i <= potencia; i++) {
          suma = suma * numero;
        }
        return suma;
      }

}

let app = new App();
console.log(app.convertirAString(5));
