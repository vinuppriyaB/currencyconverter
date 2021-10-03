let array=[];
let url="https://api.exchangerate.host/latest"
fetch(url)
.then((response)=> response.json())
.then((data)=>
{
    let obj=data.rates;
    
    let i=0;
    for(let x in obj)
    {
        array[i]=x;
        i++;
    }
    
    console.log(array);
    var selectfrom=document.getElementById("selected_from");
    for(let i=0;i<array.length;i++)
    {
        var opt=document.createElement("option");
        opt.setAttribute("value",array[i]);
        opt.innerHTML=array[i];
        selectfrom.append(opt);
    }
    var selectto=document.getElementById("selected_to");
    for(let i=0;i<array.length;i++)
    {
        var opt=document.createElement("option");
        opt.setAttribute("value",array[i]);
        opt.innerHTML=array[i];
        selectto.append(opt);
    }
   

})
.catch((error)=>console.log("not fetch"));


function calculate()
{
    
    var selectfrom=document.getElementById("selected_from").value;
    console.log(selectfrom);
    var selectto=document.getElementById("selected_to").value;
    console.log(selectto);
    fetch(`https://api.exchangerate.host/convert?from=${selectfrom}&to=${selectto}`)
    .then((response)=>response.json())
    .then((data)=>
    {
        console.log(data);
        displayresult(data.result);
       
        
    })
    .catch((error)=>console.log(error));
}
function displayresult(data)
{
    var amount=document.getElementById("amount").value;
    var res1=document.getElementById("res1");
    var res2=document.getElementById("res2");
    var result1=document.getElementById("result1");
    var result2=document.getElementById("result2");
    var shown=document.getElementById("shown");
    
    var selectfrom=document.getElementById("selected_from").value;
    console.log(selectfrom);
    var selectto=document.getElementById("selected_to").value;
    console.log(selectto);
    if(amount=="")
    {
        amount=1;
    }
    let disresult1=`${amount}  ${selectfrom}  = `; 
    let disresult2=` ${data*amount}   ${selectto}`;
    // let convrt=
    // let revconvrt
    let disres1=`${1} ${selectfrom} = ${data} ${selectto}`;
    let disres2=`${1} ${selectto} = ${1/data} ${selectfrom}`;
    
    console.log(disresult1);
    console.log(disresult2);
    console.log(disres1);
    console.log(disres2);
    shown.innerHTML="Converting Rate"
    res1.innerHTML=disres1;
    res2.innerHTML=disres2;
    result1.innerHTML=disresult1;
    result2.innerHTML=disresult2;
    
}