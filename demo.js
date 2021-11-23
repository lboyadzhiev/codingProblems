const lucho = {
    year: 1988,
    currentYear: 2021,
    calcAge: function () {
        console.log(this.currentYear - this.year);
    },
};

lucho.calcAge();
