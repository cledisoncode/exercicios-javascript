let t1 = 0;
let t2 = 1;

console.log(`${t1} -> ${t2} ->`);
for(let c = 3; c <= 10; c++){
    let t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
    console.log(`${t3}`);
    
}