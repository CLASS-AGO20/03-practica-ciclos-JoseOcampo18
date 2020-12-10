export default class App {

    factorial(numero){
        let multiplicacion = 1;
        for (let i = 1; i <= numero; i++) {
            multiplicacion = multiplicacion * i;
        }
        return multiplicacion;
    }

}

let app = new App();
