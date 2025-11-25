export default function AvatarInput() {

    const dropZone = document.getElementById("dropZone")
    const avatarInput = document.getElementById("avatarInput")
    const uploadDisplayBox = document.querySelector(".upload-box")
    const uploadPrompt = document.getElementById("uploadPrompt")
    const uploadControlBtns = document.getElementById("uploadControlBtns")


    // Logic for Handling File Upload
    // 1: Prevent default drag event behaviours
    // 2: Add visual cues
    // 3: Handle file drop
    // 4: Handle normal file upload

    dropZone.addEventListener("dragenter", e => {
        e.preventDefault()
        dropZone.classList.add("highlight")
        console.log("Drag Enter")
    })

    dropZone.addEventListener("dragover", e => {
        e.preventDefault()
        dropZone.classList.add("highlight")
        console.log("Drag Over")
    })

    dropZone.addEventListener("dragleave", e => {
        e.preventDefault()
        dropZone.classList.remove("highlight")
        console.log("Drag Leave")
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
        console.log("Drop File")
    })

    avatarInput.addEventListener("change", e => {
        handleFileSelection(e.target.files)
        console.log("Normal File Upload")
    })

    function handleFileSelection(files) {
        if (!files || files.length == 0) return 

        const file = files[0]
        console.log("Selected files", file)
        console.log("File name:", file.name)
        console.log("File size:", file.size)
        console.log("File type:", file.type)

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

/*
<div class="file-upload">
    <label for="avatarInput">
        Upload Avatar
        <div class="upload-prompt">
            <img class="upload-icon" src="../assets/images/icon-upload.svg" alt="Upload icon"/>
            <p>Drag and drop or click to upload</p>
        </div>
    </label>
    <div class="upload-info">
        <img class="upload-info-icon" src="../assets/images/icon-info.svg" alt="Upload info icon"/>
        <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
    </div>
    <input type"file" id="avatarInput" class="hidden"></input>
</div>

*/


// // Conditionally render elements inside the dropZone div
   
// // Upload Icon
// const uploadIcon = document.createElement("img")
// uploadIcon.src = "../assets/images/icon-upload.svg"
// uploadIcon.alt = "Upload icon"
// uploadIcon.classList.add("upload-icon")

// // Upload prompt
// const uploadText = document.createElement("p")
// uploadText.textContent = "Drag and drop or click to upload"



// // Uploaded file goes here

// // Button to remove file goes here

// // Button to change file goes here

// console.log("This is a placeholder!")