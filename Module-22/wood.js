/*
fixed: per item wood requirement
1. chair =3 cft
2. table = 10 cft
3. bed = 50 cft

vary: quantity
*/

function woodcalc(chaiQuan, tableQuan, bedQuan) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chaiQuan * perChairWood;
    const tableWood = tableQuan * perTableWood;
    const bedWood = bedQuan * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}


const totalWood = woodcalc(12, 4, 5);
console.log('Total wood Required',totalWood, "cft");