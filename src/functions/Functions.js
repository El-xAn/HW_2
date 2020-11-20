//function dayOfWeek(num) {
//    switch(num) {
//        case 1:
//            return 'Monday';
//            break;
//        case 2:
//            return 'Tuesday';
//            break;
//        case 3:
//            return 'Wednesday';
//            break;
//        case 4:
//            return 'Thursday';
//            break;
//        case 5:
//            return 'Friday';
//            break;
//        case 6:
//            return 'Saturday';
//            break;
//        case 7:
//            return 'Monday';
//            break;
//        default:
//            return 'Wrong input.';
//    }
//}
//
//console.log(dayOfWeek(1));


function distanceBetwenPoints(xa, ya, xb, yb) {

    let dist = Number((xb - xa) ** 2 + (yb - ya) ** 2);
    for (let i = 0; i < dist; i++) {
        let a = Number(i * i);
        if (a == dist){
        return i;
        }
    }

}

console.log(distanceBetwenPoints(1, 2, 3, 4));