
visina = Number(prompt("Unesite visinu"))
tezina = Number(prompt("Unesite tezinu"))

function bmi(visina, tezina) {
    bmi = tezina / visina ** 2;
    if (bmi <= 185) {
        return "Underweight"
    } else if (bmi <= 25) {
        return "Normal"
    }
    else if (bmi <= 30) {
        return "Overweight"
    } else if (bmi > 30) {
        return "Obese"
    }
}

