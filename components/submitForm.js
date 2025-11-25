export default function initSubmitForm() {
    const from = document.querySelector("form")

    from.addEventListener("submit", (e) => {
        e.preventDefault()
    })
}