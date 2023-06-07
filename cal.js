function Add(){
    // alert("Button Test");
    let fn= parseFloat(document.getElementById("txtFirstNumber").value);
    let sn= parseFloat(document.getElementById("txtSecondNumber").value); 

    document.getElementById("txtResult").value= fn+sn;
}