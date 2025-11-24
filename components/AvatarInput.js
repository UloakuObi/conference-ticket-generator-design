export default function AvatarInput(id) {

    let isUploaded;

    // This is the wrapper div
    const wrapper = document.createElement("div")
    wrapper.classList.add("file-upload")

    // Label for input
    const label = document.createElement("label")
    label.htmlFor = id 
    label.textContent = "Upload Avatar"

    // Inner Div for drop zone
    const dropZone = document.createElement("div")
    dropZone.classList.add("upload-prompt")

    // Conditionally render elements inside the dropZone div
    if (!isUploaded) {
        // Upload Icon
        const uploadIcon = document.createElement("img")
        uploadIcon.src = "../assets/images/icon-upload.svg"
        uploadIcon.alt = "Upload icon"
        uploadIcon.classList.add("upload-icon")

        // Upload prompt
        const uploadText = document.createElement("p")
        uploadText.textContent = "Drag and drop or click to upload"

        // Append to dropZone
        dropZone.append(uploadIcon, uploadText)
    } else {
        // Uploaded file goes here

        // Button to remove file goes here

        // Button to change file goes here
        
        console.log("This is a placeholder!")
    }
    

    // Layering the elements
    label.appendChild(dropZone)

    // Another Div for the upload instruction
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("upload-info")

    // Img Element for infoIcon
    const iconInfo = document.createElement("img")
    iconInfo.src = "../assets/images/icon-info.svg"
    iconInfo.alt = "Upload info icon"
    iconInfo.classList.add("upload-info-icon")

    // p tag for upload instruction
    const uploadHint = document.createElement("p")
    uploadHint.textContent = "Upload your photo (JPG or PNG, max size: 500KB)."

    // Composing the info div
    infoDiv.append(iconInfo, uploadHint)

    // The input for file upload, this element is hidden
    const input = document.createElement("input")
    input.type = "file"
    input.id = id
    input.accept= "image/jpeg,image/png"

    // Composing all elements; a parent div with 3 children
    wrapper.append(label, infoDiv, input)


    console.log("dropZone:", dropZone)

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

    input.addEventListener("change", e => {
        handleFileSelection(e.target.files)
        console.log("Normal File Upload")
    })

    function handleFileSelection(files) {
        const file = files[0]
        console.log("Selected files", file)
        console.log("File name:", file.name)
        console.log("File size:", file.size)
        console.log("File type:", file.type)

        const reader = new FileReader()
        reader.onload = (e) => {
            uploadIcon.src = e.target.result
        }
    }

    return wrapper
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


// // 1: Prevent default drag event behaviours
// ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
//     dropZone.addEventListener(eventName, e => {
//         e.preventDefault()
//         e.stopPropagation()
//     })
// })

// // 2: Add visual cues
// ["dragenter", "dragover"].forEach(eventName => {
//     dropZone.addEventListener(eventName, () => {
//         dropZone.classList.add("highlight")
//     })
// })

// ["dragleave", "drop"].forEach(eventName => {
//     dropZone.addEventListener(eventName, () => {
//         dropZone.classList.remove("highlight")
//     })
// })

// // 3: Handle file drop
// dropZone.addEventListener("drop", e => {
//     const files = e.dataTransfer.files
//     if (!files || files.length === 0)
//     input.files = files
//     handleFileSelection(files)
// })

// // 4: Handle normal file upload
// input.addEventListener("change", e => {
//     handleFileSelection(e.target.files)
// })

// // File Selection Function
// function handleFileSelection(files) {
//     console.log("Selected files", files)
// }

