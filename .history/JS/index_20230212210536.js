//  <Bài tập 1: Quản lý tuyển sinh>
document.getElementById('btnResult1').onclick = function () {
    //input:
    var benchmark   = Number(document.getElementById('benchmark').value);
    var area        = Number(document.getElementById('area').value);
    var object      = Number(document.getElementById('object').value);
    var subject1    = Number(document.getElementById('subject1').value); 
    var subject2    = Number(document.getElementById('subject2').value); 
    var subject3    = Number(document.getElementById('subject3').value); 

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
            document.getElementById('result1').innerHTML = 'Chúc mừng bạn đã ĐẬU. Tổng số điểm là ' + score
    } else {
        document.getElementById('result1').innerHTML = 'Chia buồn bạn đã RỚT với tổng điểm là ' + score
    }

}

//  </Bài tập 1: Quản lý tuyển sinh>