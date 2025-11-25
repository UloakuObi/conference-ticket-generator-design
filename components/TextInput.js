export default function initTextInput() {
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const usernameInput = document.getElementById("username")


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


}