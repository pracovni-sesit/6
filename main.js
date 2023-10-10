function setimg(){

    const number = document.getElementById("number").value
    const file = "./matematika/526021105-hrava-matematika_231010_105343-" + number.padStart(3, '0') + ".png"
    document.getElementById("image").src = file

}