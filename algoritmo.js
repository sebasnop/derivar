
//Polinomio digitado por el usuario
let polyFunction;

//Expresiones del polinomio ingresado separadas por "+"
let polyPositiveTerms = [];
//Expresiones separadas por "+" y por "-"
let polyTerms = [];

//Símbolos de cada término en orden.
let symbols = [];

function derivatePolynomial(polyFunction) {
    
    //Expresiones separadas por "+"
    polyPositiveTerms = polyFunction.split("+");

    //Evaluamos cada expresión separada por "+", para separarla por un "-" si lo tiene
    for (var i = 0; i < polyPositiveTerms.length; i++) {

        //Expresiones separadas por "-"
        actualExpresion = polyPositiveTerms[i].split("-");

        for (var u = 0; u < actualExpresion.length; u++) {
            
            //Expresiones separadas por "-" y "+"
            polyTerms.push(actualExpresion[u]);

            //Guardar la información de si el término es positivo o negativo
            if(u == 0){
                symbols.push("+");
            } else {
                symbols.push("-");
            }

         }

     }

     console.log(polyTerms);
     console.log(symbols);

    //Borramos todo
    polyFunction = "";
    polyPositiveTerms = [];
    polyTerms = [];
    symbols = [];

  }

  function organizeTerms(polyFunction){

    //Expresiones separadas por "+"
    polyPositiveTerms = polyFunction.split("+");

    //Evaluamos cada expresión separada por "+", para separarla por un "-" si lo tiene
    for (var i = 0; i < polyPositiveTerms.length; i++) {

        //Expresiones separadas por "-"
        actualExpresion = polyPositiveTerms[i].split("-");

        for (var u = 0; u < actualExpresion.length; u++) {
            
            //Expresiones separadas por "-" y "+"
            polyTerms.push(actualExpresion[u]);

            //Guardar la información de si el término es positivo o negativo
            if(u == 0){
                symbols.push("+");
            } else {
                symbols.push("-");
            }

         }

     }

  }