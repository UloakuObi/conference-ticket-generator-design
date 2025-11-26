export default function initTextInput() {
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const usernameInput = document.getElementById("username")

    const nameInputErrorMsg = document.getElementById("nameInputErrorMsg")
    const emailInputErrorMsg = document.getElementById("emailInputErrorMsg")
    const usernameInputErrorMsg = document.getElementById("usernameInputErrorMsg")

    const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const usernameRegex = /^@[a-zA-Z0-9_]{3,16}$/

    const inputs = [nameInput, emailInput, usernameInput];

    inputs.forEach(input => {
        const updateStyle = () => {
            if (input.value) {
                input.classList.add("bg-color")
            } else {
                input.classList.remove("bg-color");
            }
        }

        input.addEventListener('input', updateStyle)
        input.addEventListener('paste', updateStyle)
        input.addEventListener('change', updateStyle)
    })

    nameInput.addEventListener("change", () => {
        const value = nameInput.value.trim()

        if (!nameRegex.test(value)) {
            nameInputErrorMsg.classList.remove("hidden")
        } else {
            nameInputErrorMsg.classList.add("hidden")
        }
    })

    emailInput.addEventListener("change", () => {
        const value = emailInput.value.trim()

        if (!emailRegex.test(value)) {
            emailInputErrorMsg.classList.remove("hidden")
        } else {
            emailInputErrorMsg.classList.add("hidden")
        }
    })

    usernameInput.addEventListener("change", () => {
        const value = usernameInput.value.trim()

        if (!usernameRegex.test(value)) {
            usernameInputErrorMsg.classList.remove("hidden")
        } else {
            usernameInputErrorMsg.classList.add("hidden")
        }
    })

}
