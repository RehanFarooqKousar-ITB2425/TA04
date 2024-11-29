document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const closeButton = document.getElementById("closeButton");

    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        form.style.display = "none";

        
        successMessage.style.display = "flex";

        
        form.reset();

        
        setTimeout(function() {
            successMessage.style.display = "none";
            form.style.display = "block"; 
        }, 5000000);  
    });

    closeButton.addEventListener("click", function() {
        successMessage.style.display = "none";
        form.style.display = "block"; 
    });
})


