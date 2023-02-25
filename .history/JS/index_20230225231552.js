/* Bài tập 1: Quản lý tuyển sinh */
document.getElementById('bt1-btn').onclick = function () {
    //input:
    var benchmark = Number(document.getElementById('benchmark').value);
    var area = Number(document.getElementById('area').value);
    var object = Number(document.getElementById('object').value);
    var subject1 = Number(document.getElementById('subject1').value);
    var subject2 = Number(document.getElementById('subject2').value);
    var subject3 = Number(document.getElementById('subject3').value);

    //output: 'Đậu' || 'Rớt'; score
    var score = area + object + subject1 + subject2 + subject3;

    /*  condition:
    score >= benchmark && subject1 != 0 && subject2 != 0 && subject3 != 0 --> 'Đậu'
    */

    //process
    if (score >= benchmark &&
        subject1 != 0 &&
        subject2 != 0 &&
        subject3 != 0
    ) {
        document.getElementById('bt1-result').innerHTML = 'Tổng điểm là ' + score + '. Chúc mừng bạn đã đậu.'
    } else {
        document.getElementById('bt1-result').innerHTML = 'Tổng điểm là ' + score + '. Rất tiếc, bạn đã rớt, cố gắng lần sau nhé !'
    }

}
/*End-Bài tập 1: Quản lý tuyển sinh*/



/* Bài tập 2: Tính tiền điện */
document.getElementById('bt2-btn').onclick = function () {
    // input
    var name = document.getElementById('bt2-name').value;
    var kW = Number(document.getElementById('bt2-kW').value);

    //output
    var result = 0;
    var htmlString = '';
    /*condition
    50kW    first   500d/kW     <=50
    50kW    later   650d/kW     <=100
    100kW   later   850d/kW     <=200
    150kW   later   1100d/kW    <=350
    after that      1300d/kW    >350        
    */

    //process
    if (kW <= 50) {
        result = kW * 500;
    }
    else if (kW > 50 && kW <= 100) {
        result = kW * 650;
    }
    else if (kW > 100 && kW <= 200) {
        result = kW * 850;
    }
    else if (kW > 200 && kW <= 350) {
        result = kW * 1100;
    }
    else {
        result = kW * 1300;
    }

    htmlString = 'Tổng tiền điện của nhà ' + name + ' là ' + result.toLocaleString() + 'VND';

    document.getElementById('bt2-result').innerHTML = htmlString;
}
/* End-Bài tập 2: Tính tiền điện */



/* Bài tập 3: Tính thuế thu nhập cá nhân */
document.getElementById('bt3-btn').onclick = function () {
    //input
    var name = document.getElementById('bt3-name').value;
    var income = Number(document.getElementById('bt3-income').value);
    var unit = Number(document.getElementById('bt3-unit').value);
    var people = Number(document.getElementById('bt3-people').value);

    //output
    var result = 0;

    /*condition for income
    income(trieu)       tax(%)
    <= 60               5
    >60 && <=120        10
    >120 && <=210       15
    >210 && <=384       20
    >384 && <=624       25
    >624 && <=960       30
    >960                35
    */

    //process
    income = income * unit;
    var taxableIncome = 0;
    taxableIncome = income - (4e+6) - (people * (1.6e+6));


    if (taxableIncome <= 60e+6) {
        result = taxableIncome * 0.05;
    }
    else if (taxableIncome > 60e+6 && taxableIncome <= 120e+6) {
        result = (60e+6) * 0.05 + (taxableIncome - (60e+6)) * 0.1;
    }
    else if (taxableIncome > 120e+6 && taxableIncome <= 210e+6) {
        result = (60e+6) * 0.05 + (60e+6) * 0.1 + (taxableIncome - (120e+6)) * 0.15;
    }
    else if (taxableIncome > 210e+6 && taxableIncome <= 384e+6) {
        result = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (taxableIncome - (210e+6)) * 0.2;
    }
    else if (taxableIncome > 384e+6 && taxableIncome <= 624e+6) {
        result = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (taxableIncome - (384e+6)) * 0.25;
    }
    else if (taxableIncome > 624e+6 && taxableIncome <= 960e+6) {
        result = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 0.25 + (taxableIncome - (624e+6)) * 0.3;
    }
    else if (taxableIncome > 960e+6) {
        result = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 0.25 + (336e+6) * 0.3 + (taxableIncome - (960e+6)) * 0.35;
    }

    document.getElementById('bt3-result').innerHTML = 'Thuế TNCN của ' + name + ' là ' + result.toLocaleString() + 'VND.';
}
/* End-Bài tập 3: Tính thuế thu nhập cá nhân */



/* Bài tập 4: Tính tiền cáp*/

//If typeOfCustomer is enterprise, the basicServiceFee will be calculated by numberOfConnection
function hideOrShow() {
    var x = document.getElementById('bt4-selectType').value;
    console.log(x);
    if (x == 2) {
        document.getElementById('bt4-typeOfCustomer').style.display = 'block';
    }
    else if (x !== 2) {
        document.getElementById('bt4-typeOfCustomer').style.display = 'none';
    }
}


document.getElementById('bt4-btn').onclick = function () {

    // input
    var customerID = document.getElementById('bt4-customerID').value;
    var highClassChannel = Number(document.getElementById('bt4-highClassChannel').value);
    var numberOfConnection = Number(document.getElementById('bt4-numberOfConnection').value);
    var typeOfValue = Number(document.getElementById('bt4-selectType').value);

    //output
    var result = 0;

    /*condition
        --local-resident--          ($)
            handlingFee             4.5
            highClassChannelFee     7.5
            basicServiceFee         20.5

        --enterprise
            handlingFee             15
            highClassChannelFee     50
            basicServiceFee         75
    */

    //input-to-calculate
    var handlingFee = 0;
    var basicServiceFee = 0;
    var perOneHighClassChannel = 0;

    //process
    if (typeOfValue !== 2) {
        handlingFee = 4.5;
        perOneHighClassChannel = 7.5;
        basicServiceFee = 20.5;
    }

    else if (typeOfValue == 2) {
        handlingFee = 15;
        perOneHighClassChannel = 50;

        if (numberOfConnection <= 10) {
            basicServiceFee = 75;
        }
        else if (numberOfConnection > 10) {
            basicServiceFee = 75 + (numberOfConnection - 10) * 5
        };
    }


    result = handlingFee + basicServiceFee + perOneHighClassChannel * highClassChannel;

    //print-result
    document.getElementById('bt4-result').innerHTML = 'Mã khách hàng: ' + customerID + '. Tiền cáp là: $' + result.toLocaleString();
}
/* End-Bài tập 4: Tính tiền cáp*/

/* LINK VERCEL
https://tran-huu-phuoc-bc-43-bt-js-buoi5.vercel.app/
*/














