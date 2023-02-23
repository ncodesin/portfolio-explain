export default function filltext(cate, catecount, setCatecount) {
    for (let i = 0; i < 4; i++) {
        if (catecount[i] == 1) {
            cate[i].style.webkitTextFillColor = 'black';
            cate[i].style.webkitTextStrokeColor = 'white';
        } else if (catecount[i] == 0) {
            cate[i].style.webkitTextFillColor = 'snow';
            cate[i].style.webkitTextStrokeColor = 'black';
        }
    }
}
