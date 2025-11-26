export default function initSubmitForm() {
    const form = document.querySelector("form")
    const avatarInput = document.getElementById("avatarInput")
    const uploadInfo = document.getElementById("uploadInfo")    

    form.addEventListener("submit", (e) => {
        e.preventDefault() // This is to prevent a page reload

        if (!avatarInput.files.length) {
            alert("Please upload an avatar!")
            uploadInfo.textContent = "Please upload an avatar!"
            uploadInfo.classList.add("red-highlight")
            return;
        } else {
            uploadInfo.textContent = "Upload your photo (JPG or PNG, max size: 500KB)."
            uploadInfo.classList.remove("red-highlight")
        }

        const formData = new FormData(form) 

        console.log(formData.values()) // Logging out the value, but it's logs an empty function

        // This logs out only the keys, no values, even as the form is filled
        for (const [key, value] of formData) {
            console.log(key, value)
        }

        const name = formData.get("name")
        console.log(name) // This logs out nothing.

        window.location.replace("success.html")
        
    })
}

