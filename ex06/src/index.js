function firstName (firstName) {
    return firstName.toUpperCase();
}

function lastName (lastName) {
    return lastName.toLowerCase();
}

console.log(firstName("Tina"));
console.log(lastName("Besal"));

exports.firstName = firstName;
exports.lastName = lastName;