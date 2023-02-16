//  <Bài tập 1: Quản lý tuyển sinh>
document.getElementById('btnResult1').onclick = function () {
    //input:
    var benchmark   = document.getElementById('benchmark').value;
    var area        = document.getElementById('area').value;
    var object      = document.getElementById('object').value;
    var subject1    = document.getElementById('subject1').value; 
    var subject2    = document.getElementById('subject2').value; 
    var subject3    = document.getElementById('subject3').value; 

    //output: 'Đậu' || 'Rớt'; score
    var score       = area + object + subject1 + subject2 + subject3;

    /*  condition:
    score >= benchmark && subject1 != 0 && subject2 != 0 && subject3 != 0 --> 'Đậu'
    */

    //process
    if (    score >= benchmark && 
            subject1 != 0 &&
            subject2 != 0 &&
            subject3 != 0
        ) {
            document.getElementById('result1').innerHTML = 'Bạn đã Đậu với tổng điểm là ' + score
    }

}

//  </Bài tập 1: Quản lý tuyển sinh>