function triangleArea(a, b, c) {
    var semiPeram = (a + b + c) / 2;
    var area = Math.sqrt(semiPeram * (semiPeram - a) * (semiPeram - b) * (semiPeram - b));
    return area;
}
