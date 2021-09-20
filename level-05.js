function triangleArea(a, b, c) {
    let semiPeram = (a + b + c) / 2;
    let area = Math.sqrt(semiPeram * ((semiPeram - a) * (semiPeram - b) * (semiPeram - b)));
    return area;
}
