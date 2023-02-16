/* Bài tập 1: Quản lý tuyển sinh */
document.getElementById('bt1-btn').onclick = function () {
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
            document.getElementById('bt1-result').innerHTML = 'Tổng điểm là ' + score + '. Chúc mừng bạn đã đậu.'
    } else {
        document.getElementById('bt1-result').innerHTML = 'Tổng điểm là ' + score + '. Rất tiếc, bạn đã rớt, cố gắng lần sau nhé !' 
    }

}
/*End-Bài tập 1: Quản lý tuyển sinh*/

/* Bài tập 3: Tính tiền điện */
document.getElementById('bt2-btn').onclick = function() {
    // input
    var name    = document.getElementById('bt2-name').value;
    var kW      = Number(document.getElementById('bt2-kW').value);
    var result  = 0;
}
















/* End-Bài tập 3: Tính tiền điện */