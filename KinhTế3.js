function tru(form)
{
    a = eval(form.kq.value);
    if(a==1)
    {
        form.kq.value = 1;
    }
    else
    {
        b=a-1;

        form.kq.value = b;
    }
}
function cong(form)
{
    a = eval(form.kq.value);
        b=a+1;
        form.kq.value = b;
}

function chonmua(form)
{
    c = b*168;
    form.thanhtien.value = (c+".000 VNĐ");
    alert("Số tiền phải trả là : "+c+".000 VNĐ","Thanh Toán");
}

    function myFunsion(imgs)
    {
        var A = document.getElementById("dacnhantam");
        A.src = imgs.src;
    }