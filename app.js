document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");
    const frequencyField = document.querySelector("#frequency");
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const frequencyError = document.querySelector("#frequency-error");
    const formMessage = document.querySelector("#form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const resetField = (field, errorElement) => {
            errorElement.textContent = "";
            field.removeAttribute("aria-invalid");
        };

        formMessage.textContent = "";
        formMessage.classList.remove("success");

        const nameValue = nameField.value.trim();
        const emailValue = emailField.value.trim();
        const frequencyValue = frequencyField.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let hasError = false;
        let firstErrorField = null;

       
        resetField(nameField, nameError);
        resetField(emailField, emailError);
        resetField(frequencyField, frequencyError);


        if (nameValue === "") {
            nameError.textContent = "Enter your name.";
            nameField.setAttribute("aria-invalid", "true");
            hasError = true;
            if (!firstErrorField) firstErrorField = nameField;
        }

        
        if (emailValue === "") {
            emailError.textContent = "Enter your email address.";
            emailField.setAttribute("aria-invalid", "true");
            hasError = true;
            if (!firstErrorField) firstErrorField = emailField;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Enter an email address like name@example.com.";
            emailField.setAttribute("aria-invalid", "true");
            hasError = true;
            if (!firstErrorField) firstErrorField = emailField;
        }

    
        if (frequencyValue === "") {
            frequencyError.textContent = "Choose how often we should email you.";
            frequencyField.setAttribute("aria-invalid", "true");
            hasError = true;
            if (!firstErrorField) firstErrorField = frequencyField;
        }


        if (hasError) {
            if (firstErrorField) firstErrorField.focus();
            return;
        }

        formMessage.textContent = `Thank you, ${nameValue}! You're on the mailing list.`;
        formMessage.classList.add("success");

        form.reset();
    });
});
