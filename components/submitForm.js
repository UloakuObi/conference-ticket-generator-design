export default function initSubmitForm() {
    const form = document.querySelector("form")
    const avatarInput = document.getElementById("avatarInput")
    const uploadInfo = document.getElementById("uploadInfo")    

    // Check if the page has a form element before running the code block below
    // This avoids errors on the success page
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault() // This is to prevent a page reload

            // Manually check that a user actually uploaded a file before submitting, 
            // this is important because this element is hidden (hidden inputs can't be set as required)
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

            // Extract each form entry and save in an object
            const userInfo = {
                name: formData.get("name"),
                email: formData.get("email"),
                username: formData.get("username"),
                avatar: formData.get("avatar") 
            }

            sessionStorage.setItem("userInfo", JSON.stringify(userInfo)) // Save user info to session storage
            
            window.location.replace("success.html") // Navigate to the success page after collecting and storing form data
            
        })
    }
}


