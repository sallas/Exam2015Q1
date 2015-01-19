var generator = {};

var fname = ["f1", "f2", "f3", "f4", "f5"];
var lname = ["l1", "l2", "l3", "l4", "l5"];
var street = ["s1", "s2", "s3", "s4", "s5"];
var zip = ["z1", "z2", "z3", "z4", "z5"];

generator.getData = function (amount, included) {
    var f = false;
    var l = false;
    var s = false;
    var z = false;

    if (included.indexOf("fname") != -1)
        f = true;
    if (included.indexOf("lname") != -1)
        l = true;
    if (included.indexOf("street") != -1)
        s = true;
    if (included.indexOf("zip") != -1)
        z = true;

    var data = [];

    for (var i = 0; i < amount; i++) {
        var person = {};
        if(f) person.fname = fname[Math.floor((Math.random() * 5))];
        if(l) person.lname = fname[Math.floor((Math.random() * 5))];
        if(s) person.street = fname[Math.floor((Math.random() * 5))];
        if(z) person.zip = fname[Math.floor((Math.random() * 5))];
        data.push(person);
    }
    return data;
};

module.exports = generator;