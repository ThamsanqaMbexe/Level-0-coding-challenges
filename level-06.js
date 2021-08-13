function maxNum(a, b, c) {
    if( a > (b && c)) {
        return a;
    } else if (b > (a && c)) {
        return b;
    } else if (c > (a && b)) {
        return c;
    } else {
        return "all even";
    }
}