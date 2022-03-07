function addvis(){ 
    document.querySelector(".add").classList.toggle("invisible");
    document.querySelector(".edit").classList.add("invisible");  
    document.querySelector(".del").classList.add("invisible");  
}
document.querySelector(".addb").addEventListener("click",addvis);

function editvis(){ 
    document.querySelector(".edit").classList.toggle("invisible");
    document.querySelector(".add").classList.add("invisible");
    document.querySelector(".del").classList.add("invisible"); 
}
document.querySelector(".editb").addEventListener("click",editvis);
function delvis(){ 
    document.querySelector(".del").classList.toggle("invisible");
    document.querySelector(".edit").classList.add("invisible");
    document.querySelector(".add").classList.add("invisible");
}
document.querySelector(".delete").addEventListener("click",delvis);

function billingFunction(){
    var cal = document.getElementById('calculate');
    var rawprice = document.getElementById('rawprice');
    var sellprice = document.getElementById('sellprice');
    var manfprice = document.getElementById('manfprice');
    var advprice = document.getElementById('advprice');
    var gst = document.getElementById('gst');

    var profit = document.getElementById('profit');
    if (cal.checked) {
        profit.value = sellprice.value-rawprice.value-manfprice.value-advprice.value-gst.value;
        profit.setAttribute("required", true);
    }
    else{
        profit.value = "";
        profit.removeAttribute("required");
    }
    
}