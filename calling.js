const age = function (age) {
    if (age > 18) {
        return age = true;
    } else if (age < 18) {
        return age = false;
    };
}
console.log(age(19));
//expected return = true
console.log(age(9));
//expected return = false

//age > 18 Hello adult
const age1 = function (age1) {
    console.log("Entering age1..");
    console.log("Hello adult")
    if (age1 > 18) {
        return 18 + age1;
    }
}
age1();

// age < 18 Hello kiddo
const age2 = function (age2) {
    console.log("Entering age2..");
    console.log("Hello Kiddo")
    if (age2 < 18) {
        return 18 - age2;
    }
}
age2();

