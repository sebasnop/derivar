
//Polinomio digitado por el usuario
let polynomial;

//Numerador n y denominador d para derivar cociente n/d
let n;
let d;

console.log("DERIVA TU POLINOMIO CON:");
console.log("derivatePolynomial(\"a+bx+cx^2+...+kx^n\");");
console.log("");
console.log("DERIVA TU COCIENTE DE POLINOMIOS CON:");
console.log("derivateQuotient(\"numerador\", \"denominador\");");


// Derivar Polinomio
function derivatePolynomial(polynomial) {
    
    //Separar cada término
    const terms = separateTerms(polynomial);
    const termAmount = terms.length;

    //Separar el coeficiente y el exponente dentro de cada término
    const info = coeficientsAndExponents(terms);
    const coeficients = info[0];
    const exponents = info[1];
    
    //Para guardar el polinomio derivado
    let derivedPolynomial = "";

    //Para no dejar un "+" en un primer término positivo
    let firstTerm = true;

    //Para cada término
     for(i= 0; i < termAmount; i++){

        //Calculamos su coeficiente y exponente derivados
        const derivedCoeficient = (coeficients[i]*exponents[i]);
        const derivedExponent = exponents[i]-1;

        //Si el coeficiente no es nulo
        if (derivedCoeficient != 0){

            //Juntamos el coeficiente y el exponente en un String
            //Evaluamos si es el primer término, por si es positivo para que no se muestre con "+"
            const term = writeTerm(derivedCoeficient, derivedExponent, firstTerm);
     
            derivedPolynomial += term;

            //Después del primer término, esta condición no es verdad
            firstTerm = false;

        }


    }

    return derivedPolynomial;

}

//Separa los términos
function separateTerms(polynomial){

    let terms = [];

    //Expresiones separadas por "+"
    const positiveExpresion = polynomial.split("+");

    //Evaluamos cada expresión separada por "+", para separarla también por un "-" si lo tiene
    for (var i = 0; i < positiveExpresion.length; i++) {
        
        //Expresiones separadas por "-"
        const expresion = positiveExpresion[i].split("-");

        for (var u = 0; u < expresion.length; u++) {
            
            //Verificamos que no se haya entregado un término vacío o nulo
            if(expresion[u] != "" && expresion[u] != "0"){

                //Información de si el término es positivo o negativo
                if(u == 0){
                    //Si u=0 es porque el término fue separado antes por "+"
                    terms.push(expresion[u]);

                } else {
                    //Sino, apenas fue separado por "-"
                    terms.push("-"+expresion[u]);
                }
            }
        }
    }

    return terms;

}

//Separa la infomación de los términos, entre coeficientes y exponentes.
function coeficientsAndExponents(terms){

    let exponents = [];
    let coeficients = [];
    
    const termAmount = terms.length;

    //Para cada término
    for(i= 0; i < termAmount; i++){
        
        //Ver en el término está algún "x^", sino, evaluar si tiene un "x" o ninguno
        if (terms[i].includes("x^")){

            //Si hay un "x^", al dividirlo la primera parte es el coeficiente y la segunda el exponente
            const coeficient = parseInt(terms[i].split("x^")[0]);
            const exponent = parseInt(terms[i].split("x^")[1]);

            //Si la primera parte es nula, es porque su coeficiente es 1 y se omitió
            if (isNaN(coeficient)){
                coeficients.push(1);
            } else {
                coeficients.push(coeficient);
            }

            //Siempre se va a añadir el exponente
            exponents.push(exponent);

        } else if (terms[i].includes("x")){

            let coeficient = parseInt(terms[i].split("x")[0]);
            
            if (isNaN(coeficient)){
                coeficients.push(1);
            } else {
                coeficients.push(coeficient);
            }

            exponents.push(1);
        
        } else {
        
            coeficients.push(parseInt(terms[i].split("x^")[0]));
            exponents.push(0);
        
        }

     }

     //Retornamos un arreglo de dos dimensiones
     //Tiene las listas ordenadas de coeficientes y exponentes
     const info = [coeficients, exponents];

     return info;

}

// Derivar Cociente n/d siendo n y d polinomios n(x) y d(x)
function derivateQuotient(n, d){

    // Calcular el denominador final, que es (d(x))^2
    const dFinal = multiplyPolynomials(d, d);

    //Calcular el numerador final, que es [n'(x) * d(x)] - [d'(x) * n(x)]
    const nDerived = derivatePolynomial(n);
    const dDerived = derivatePolynomial(d);

    const nFinal1 = "[" + multiplyPolynomials(nDerived, d) + "]";
    const nFinal2 = "[" + multiplyPolynomials(dDerived, n) + "]";
    const nFinal = nFinal1 + "-" + nFinal2;

    //Cociente derivado
    const derivedQuotient = nFinal + " / " + dFinal;

    return derivedQuotient;

}

//Multiplicar dos polinomios
function multiplyPolynomials (p, q) {

    //Extraer la información del primer polinomio
    const pTerms = separateTerms(p);
    const pTermAmount = pTerms.length;
    const pInfo = coeficientsAndExponents(pTerms);

    //Extraer la información del segundo polinomio
    const qTerms = separateTerms(q);
    const qTermAmount = qTerms.length;
    const qInfo = coeficientsAndExponents(qTerms);

    //Se usa una bandera para no escribir "+" en el primer término, si es positivo
    let firstTerm = true;

    //Se inicializa el String donde se guardará el resultado de la multiplicación
    let result = "";

    //Para cada término i del primer polinomio
    for (i = 0; i < pTermAmount; i++) {

        //Definimos su coeficiente y su exponente
        const pCoeficient = pInfo[0][i];
        const pExponent = pInfo[1][i];

        //Para cada término u del segundo polinomio
        for (u = 0; u < qTermAmount; u++) {

            //Definimos su coeficiente y su exponente
            const qCoeficient = qInfo[0][u];
            const qExponent = qInfo[1][u];

            //Multiplicación de cada término i del primer polinomio por cada u del segundo
            const coeficient = pCoeficient*qCoeficient;
            const exponent = pExponent+qExponent;

            //Si el coeficiente no es nulo
            if (coeficient != 0){

                //Escribimos el término, resultado de la multiplicación
                const term = writeTerm (coeficient, exponent, firstTerm);
    
                //Lo añadimos al resultado
                result += term;
        
                //Después del primer término, esta condición no es verdad
                firstTerm = false;
    
            }
    
        }

    }

    return result;

}

//Escribir un término
function writeTerm(coeficient, exponent, firstTerm){

    //Para guardar el término
    let term = "";

    //Si el coeficiente es positivo y no es el primero, debemos escribir un "+"
    if (coeficient > 0 && firstTerm == false) {
        term += "+";
    };

    //Dependiendo del exponente de x, ajustamos su escritura
    switch (exponent) {
        case 0:
            term += coeficient.toString();
            break;
        case 1:
            term += coeficient.toString()+"x";
            break;
        default:
            term += coeficient.toString()+"x^"+exponent;
    }

    //Retornamos el String de este término
    return term;

}

