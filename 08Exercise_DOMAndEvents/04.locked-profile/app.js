function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"));

    buttons.forEach((button) => {
        button.addEventListener("click", functionToggle);
    });

    function functionToggle(event) {
        const currentBtn = event.currentTarget;
        const currentProfile = currentBtn.parentElement;
        const children = currentProfile.children;
        const unlockRadioBtn = children[4];
        const additionalInfoDiv = children[9];

        if(unlockRadioBtn.checked){
            if (currentBtn.textContent === "Show more") {
                currentBtn.textContent = "Hide it";
                additionalInfoDiv.style.display="block"
            } else if (currentBtn.textContent === "Hide it") {
                currentBtn.textContent = "Show more";
                additionalInfoDiv.style.display="none"
            }
        }
    }
}