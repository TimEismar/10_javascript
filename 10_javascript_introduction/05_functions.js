function sum(x, y) {
    let ergebnis = x + y;
    return ergebnis;
}

sum(10, 2);
console.log("Ergebnis = " + sum(2, 3));

function multi(x, y, z, v, t,){
    let multiErgebnis = x * y * z / (v -t);
    return multiErgebnis;
}

multi(Math.random(), Math.random(), 3.14159265359);
console.log("Ergebnis: " + multi( Math.random(), Math.random(), 3.14159265359, 1962, 1996) )

/*
AUFGABE:
1) Funktion anlegen für Subtraktion oder Multiplikation oder Division
2) Aufruf dieser Funktion
*/