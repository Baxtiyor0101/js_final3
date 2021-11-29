function findNum(num){
    let s=0;
    let x=0;
    while (num>1) {
        if(num%3==0){
            num = num/3;
            s++; 
        }
        else{
            x++;
            break;
        }
    }
    if (x==0) {   
        console.log(s);
    }
    else{
        console.log("siz kiritgan son 3 ning darajas emas!");
    }
}
findNum(243);



console.log(( null || 2 && 3 || 4  && undefined || 0));
