function inverterString(string) {
    let stringInvertida = "";
    // Itera sobre a string de trás para frente
    for (let i = string.length - 1; i >= 0; i--) {
        // Adiciona cada caractere ao início da string invertida
        stringInvertida += string[i];
    }
    return stringInvertida;
}

// Exemplo de uso da função
let stringOficial = prompt("Digite uma string para inverter:");
let stringInvertida = inverterString(stringOficial);
console.log("String original:", stringOficial);
console.log("String invertida:", stringInvertida);