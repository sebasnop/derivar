
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
    
    console.log(polyPositiveTerms);

    //Evaluamos cada expresión separada por "+", para separarla por un "-" si lo tiene
    for (var i = 0; i < polyPositiveTerms.length; i++) {

        //Expresiones separadas por "-"
        actualExpresion = polyPositiveTerms[i].split("-");

        //if(actualExpresion.length == 1){

        //    polyTerms.push(actualExpresion[0]);
        //    symbols.push("+");
        
        //} else {

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
        //}

     }

     console.log(polyTerms);
     console.log(symbols);

    //Borramos todo
    polyFunction = "";
    polyPositiveTerms = [];
    polyTerms = [];
    symbols = [];

  }