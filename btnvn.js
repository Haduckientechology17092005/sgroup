function quadratic_equation(a,b,c){
    let ketqua = {nghiem1: null, nghiem2: null}
    let delta = b*b-4*a*c
    if(a!=0){
    if(delta<0){
        console.log("phuong trinh vo nghiem")
    } else if (delta ==0){
        ketqua.nghiem1=-b/(2*a)
        console.log(ketqua.nghiem1)
    } else {
        ketqua.nghiem1 = (-b+Math.sqrt(delta))/(2*a)
        ketqua.nghiem2 = (-b-Math.sqrt(delta))/(2*a)
        console.log(ketqua.nghiem1, ketqua.nghiem2)
    }
} else {
    ketqua.nghiem1=-c/b
    console.log(ketqua.nghiem1)
}
    return ketqua
}
function day_month_year(ngay,thang,nam){
    let Nam_nhuan = (c%4===0)
    let Ngay = [31,Nam_nhuan?28:29,31,30,31,30,31,31,30,31,30,31]
    if(ngay > Ngay[thang-1]){
        return 0;
    }
    if(thang == 2){
        ngay>29
        return 0;
    }
    if(nam!=Nam_nhuan){
        if(ngay>28)
        return 0;
    }
    ngay++
    if(ngay>Ngay[thang-1]){
        thang++
        ngay=1
        if(thang>12){
            thang=1
            nam++
        }
    }
    return (ngay:ngay, thang:thang, nam: nam)
}