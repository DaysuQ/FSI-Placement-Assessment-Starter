
console.log('JavaScript code has loaded!')

let yourName = "Daysu Quispe" 


let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let cookieAverage = 0 // Cookie average
let totalCookie = document.querySelector('#qty-total')



const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`


// GB
const gbPlusBtn = document.querySelector('#add-gb')
const gbTotal = document.querySelector('#qty-gb')




// GB add
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1;
    gbTotal.textContent = `${gb}`;

    cookieAverage = gb + cc + sugar;
    totalCookie.textContent = cookieAverage;

console.log('Gingerbread + button was clicked!')

});

// GB min
let gbMinBtn = document.querySelector('#minus-gb');
gbMinBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb = gb - 1;
    }
    gbTotal.textContent = `${gb}`;

    cookieAverage = gb + cc + sugar;
    totalCookie.textContent = cookieAverage;

})







// CC
const ccPlusBtn = document.querySelector('#add-cc')
const ccTotal = document.querySelector('#qty-cc')




// CC add
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;
    ccTotal.textContent = `${cc}`;

    cookieAverage = gb + cc + sugar;
    totalCookie.textContent = cookieAverage;



console.log('Chocolate Chip + button was clicked!')

});

// CC min
let ccMinBtn = document.querySelector('#minus-cc');
ccMinBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc = cc - 1;
    }
    ccTotal.textContent = `${cc}`;

    cookieAverage = gb + cc + sugar;
    totalCookie.textContent = cookieAverage;

})








// Sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarTotal = document.querySelector('#qty-sugar')




// Sugar add
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1;
    sugarTotal.textContent = `${sugar}`;

    cookieAverage = gb + cc + sugar;
    totalCookie.textContent = cookieAverage;



console.log('Sugar + button was clicked!')

});

// Sugar min
let sugarMinBtn = document.querySelector('#minus-sugar');
sugarMinBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar = sugar - 1;
    }
    sugarTotal.textContent = `${sugar}`;

    cookieAverage = gb + cc + sugar;
    totalCookie.textContent = cookieAverage;

})

