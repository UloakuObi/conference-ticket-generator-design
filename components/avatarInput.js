export default function initAvatarInput() {

    const dropZone = document.getElementById("dropZone")
    const avatarInput = document.getElementById("avatarInput")
    const uploadDisplayBox = document.querySelector(".upload-box")
    const uploadPrompt = document.getElementById("uploadPrompt")
    const uploadControlBtns = document.getElementById("uploadControlBtns")
    // const uploadInfo = document.getElementById("uploadInfo")


    // Logic for Handling File Upload
    // 1: Prevent default drag event behaviours
    // 2: Add visual cues
    // 3: Handle file drop
    // 4: Handle normal file upload


    // Check if the page has a dropZone element before running the code block below
    // This avoids errors on the success page
    if (dropZone) {
        dropZone.addEventListener("keydown", (e) => {

            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                avatarInput.click() // This activates file picker on clicking space or enter (for keyboard users)
            }
            
        })

        dropZone.addEventListener("dragenter", e => {
            e.preventDefault()
            dropZone.classList.add("highlight")
            // console.log("Drag Enter")
        })

        dropZone.addEventListener("dragover", e => {
            e.preventDefault()
            dropZone.classList.add("highlight")
            // console.log("Drag Over")
        })

        dropZone.addEventListener("dragleave", e => {
            e.preventDefault()
            dropZone.classList.remove("highlight")
            // console.log("Drag Leave")
        })

        dropZone.addEventListener("drop", e => {
            e.preventDefault()
            const files = e.dataTransfer.files
            if (files.length > 0) {
                handleFileSelection(files)
            } else {
                console.log("No file selected!")
            }
            dropZone.classList.remove("highlight")
            // console.log("Drop File")
        })

        avatarInput.addEventListener("change", e => {
            handleFileSelection(e.target.files)
            // console.log("Normal File Upload")
        })

        function handleFileSelection(files) {
            if (!files || files.length == 0) return 

            const file = files[0]
            if (!validateAvatar(file)) return

            // console.log("Selected files", file)
            // console.log("File name:", file.name)
            // console.log("File size:", file.size)
            // console.log("File type:", file.type)

            const reader = new FileReader()
            reader.onload = (e) => {
                uploadDisplayBox.src = e.target.result
                uploadDisplayBox.style.padding = 0 
                uploadPrompt.classList.add("hidden")
                uploadControlBtns.classList.remove("hidden")
            }

            reader.readAsDataURL(file)
        }
    }

}

function validateAvatar(file) {
    const allowedTypes = ["image/jpeg", "image/png"];
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const MAX_SIZE = 500 * 1024;
  
    const extension = file.name.split('.').pop().toLowerCase();
  
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG and PNG files are allowed.");
      return false;
    }
  
    if (!allowedExtensions.includes(extension)) {
      alert("Invalid file extension.");
      return false;
    }
  
    if (file.size > MAX_SIZE) {
      alert("Image must be less than 500KB.");
      return false;
    }
  
    return true;
  }
  

