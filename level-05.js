function triangleArea(s1, s2, s3) {
    let semiPeram = (s1 + s2 + s3) / 2;
    let area = Math.sqrt(semiPeram * ((semiPeram - s1) * (semiPeram - s2) * (semiPeram - s3)));
    return area;
}
