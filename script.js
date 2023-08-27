let text = document.getElementById ('inputBox');
let qrBox = document.getElementById('qrBox');
let qrImage = document.getElementById ('qrImage');
let btn = document.getElementById ('btn');


function qrCode(){
    if(text.value != ''){
        var y = qrBox;
        y.classList.add('show');
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
    }
    else{
        disError();
        
       
    }
}


disError = ()=>{
    var x = text;
    
    x.classList.add('error');
    setTimeout(()=>{x.classList, x.classList.remove('error')},2000)
    
}


 