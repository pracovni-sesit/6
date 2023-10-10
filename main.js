let number = 0

function setimg(){

    number = document.getElementById("number").value
    const file = "./matematika/526021105-hrava-matematika_231010_105343-" + number.padStart(3, '0') + ".png"
    document.getElementById("image").src = file

}

function changimg(by){

    const numero = Number(number)+by
    console.log(numero)
    number = String(numero)
    const file = "./matematika/526021105-hrava-matematika_231010_105343-" + number.padStart(3, '0') + ".png"
    document.getElementById("image").src = file

}
