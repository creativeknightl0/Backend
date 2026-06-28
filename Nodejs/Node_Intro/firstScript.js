const disclaimerContent = ["Disclaimer's Kylie H", "Disclaimer's Kylie A", "Disclaimer's Kylie R", "Disclaimer's Kylie D", "Disclaimer's Kylie N", "Disclaimer's Kylie I", "Disclaimer's Kylie P", "Disclaimer's Kylie P", "Disclaimer's Kylie L", "Disclaimer's Kylie E", "Disclaimer's Kylie S!"];
let delay = 0;

for(let i = 0; i < disclaimerContent.length; i++) {
    delay = delay + 2000;
    setTimeout(() => {
        console.log(`${disclaimerContent[i]}\n`);
    }, delay);
}