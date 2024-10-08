function calcular(){
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const d = parseFloat(document.getElementById('d1').value);
    const k = 8.9875 * Math.pow(10, 9); 
    var forca = k * (Math.abs(q1 * q2)) / (d * d);
    document.getElementById('resultado').innerText = forca.toExponential(2);
}

function calcular2(){
    const q = parseFloat(document.getElementById('q').value);
    const v = parseFloat(document.getElementById('v').value);
    const b = parseFloat(document.getElementById('b').value);
    const sena = parseFloat(document.getElementById('sena').value);
    var magnetico = q * v * b *sena;

    document.getElementById('magnetico').innerText = magnetico.toExponential(2);
}