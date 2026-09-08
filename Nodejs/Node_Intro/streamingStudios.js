// const firstStudio = process.argv[2];
// console.log(firstStudio);

console.log('------------------ List of top streaming services ------------------');

for(let i=2; i<process.argv.length; i++) {
    console.log(`${i-1}: ${process.argv[i]}`)
}