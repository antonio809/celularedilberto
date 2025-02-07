function calculateIMC() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultElement = document.getElementById('result');
    
    if (!weight || !height || height <= 0) {
        resultElement.textContent = "Por favor, insira valores válidos.";
        return;
    }
    
    let imc = weight / (height * height);
    let classification = "";
    
    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc < 24.9) {
        classification = "Peso normal";
    } else if (imc < 29.9) {
        classification = "Sobrepeso";
    } else {
        classification = "Obesidade";
    }
    
    resultElement.textContent = `Seu IMC é ${imc.toFixed(2)} (${classification})`;
}
