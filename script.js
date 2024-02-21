function calificacion(nome, cualificacion) {

    let resultado;
    if (cualificacion >= 90) {
        resultado = "Sobresaliente";
    } else if (cualificacion >= 80) {
        resultado = "Notable";
    } else if (cualificacion >= 70) {
        resultado = "Aprobado";
    } else {
        (cualificacion <= 69)
        resultado = "Suspenso";
    }

    document.getElementById("nombreRes").textContent = nome;
    document.getElementById("notaRes").textContent = resultado;

}
