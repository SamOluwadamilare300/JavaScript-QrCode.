


const input = document.getElementById('qrCodeUrl');
const button = document.getElementById('qrCodeGenerator');
const image = document.getElementById('qrCodeImage');




button.addEventListener("click",() => {
     QRCode.toDataURL(input.value).then(dataUrl =>  {

        image.src = dataUrl;
     })

});