var ele=document.createElement("div");
console.log(ele);

ele.innerHTML=10;
setTimeout(()=>{
    ele.innerHTML=9;
    setTimeout(()=>{
        ele.innerHTML=8;
        setTimeout(()=>{
            ele.innerHTML=7;
            setTimeout(()=>{
                ele.innerHTML=6;
                setTimeout(()=>{
                    ele.innerHTML=5;
                    setTimeout(()=>{
                        ele.innerHTML=4;
                        setTimeout(()=>{
                            ele.innerHTML=3;
                            setTimeout(()=>{
                                ele.innerHTML=2;
                                setTimeout(()=>{
                                ele.innerHTML=1;
                                    setTimeout(()=>{
                                        ele.innerHTML= "Happy Independence Day";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
document.body.append(ele);