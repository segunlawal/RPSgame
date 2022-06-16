function calcme(){
    var fnum = document.getElementById("fnum").value;
    var lnum = document.getElementById("lnum").value;
    var result = document.getElementById("result");
    var rs = fnum/lnum;
    console.log(rs)
    var t = document.createTextNode(rs);
    console.log(t)
    result.appendChild(t);

}