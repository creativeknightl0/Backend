// 1st way
export const currentCharacterName = 'Trevor';
export const money = 12000;
export const policeStars = 3;
export const propertiesBought = 2;
export const missionsCompleted = 23;
export const afterStripClubMoneyDeductedMoneyLeft = (deductedMoney) => money - deductedMoney;

// 2nd way
// const gtaV = {
//     currentCharacterName: 'Trevor',
//     money: 12000,
//     policeStars: 3,
//     propertiesBought: 2,
//     missionsCompleted: 23
// };

// module.exports = gtaV;

// 3rd way
// module.exports.currentCharacterName = 'Trevor';
// module.exports.money = 12000;
// module.exports.policeStars = 2;
// module.exports.propertiesBought = 2;
// module.exports.missionsCompleted = 23;

// 4th way
// exports.currentCharacterName = 'Trevor';
// exports.money = 12000;
// exports.policeStars = 3;
// exports.propertiesBought = 2;
// exports.missionsCompleted = 23;