let number = 2;
switch (number) {
    case 1: console.log("ianuarie"); break;
    case 2: console.log("februarie"); break;
    case 3: console.log("martie"); break;
    default: console.log("Ati introdus nr lunii gresit");
}
number = 20;
const luni = [
            'ianuarie','februarie','martie',
            'aprilie','mai','iunie',
            'iulie','august','septembrie',
            'octombrie','noiembrie','decembrie'
        ];
if ( number>=1 && number<=12 ) {
    console.log(luni[number-1]);
} else {
    console.log("Ati introdus nr lunii gresit");
}

console.log("numerele divizibile cu 2 sau cu 5 din intervalul 100-200");
for (let i=100; i<=200; i++)
    if (i%2==0 || i%5==0)
        console.log(i);

console.log("numerele negative mai mari decit 50, in ordinea (-1, -2..., -49)");
for (let i=-1; i>-50; i--)
    console.log(i);

console.log("suma primelor 10 numere pozitive");
let s=0;
for (let i=1; i<=10; i++)
    s += i;
console.log(s);

console.log("Tablouri")
let numere = [2, 5];
console.log(numere);
numere.push(8);
numere.unshift(3);
console.log(numere);

for (let i=0;i<numere.length; i++)
    console.log(numere[i]);

let sum = 0;
numere.forEach(numar =>{
    sum += numar;}
)
console.log(sum);

console.clear();
for (const key in luni)
    console.log(luni[key]);
