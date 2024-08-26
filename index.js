document.addEventListener("DOMContentLoaded", function () {
    // Obtém o número de telefone do href atual do botão .float-whatsapp a
    var whatsappButton = document.querySelector(".float-whatsapp a");
    var currentWhatsAppLink = whatsappButton.getAttribute("href");

    // Obtém a URL da página atual
    var currentPageURL = window.location.href;

    // Converte a URL para o formato desejado
    var encodedURL = encodeURIComponent(currentPageURL);
    
    // Constrói a nova URL do WhatsApp com o número de telefone do botão
    var whatsappURL = currentWhatsAppLink + "?text=Quero+mais+informações+sobre:" + encodedURL;

    // Atualiza o href do botão .float-whatsapp a
    whatsappButton.href = whatsappURL;
});