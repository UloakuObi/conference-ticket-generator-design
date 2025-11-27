export default function initGenerateCard() {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"))

    const card = document.querySelector(".card-container")
    const successTitle = document.getElementById("successTitleMsg")
    const ticketConfirmation = document.getElementById("ticketConfirmation")
    const cardUsername = document.getElementById("cardUsername")
    const githuhUsername = document.getElementById("githubUsername")
    const cardAvatar = document.getElementById("cardAvatar")

    // console.log(userInfo)

    const successTitleMsg = `Congrats, <span class="highlight-name">${userInfo.name}</span>! Your ticket is ready.`

    const ticketConfirmMsg = `
    We've emailed your ticket to 
    <span class="red-highlight">${userInfo.email}</span> 
    and will send updates in the run up to the event.
    `

    if (card) {
        successTitle.innerHTML = successTitleMsg
        ticketConfirmation.innerHTML = ticketConfirmMsg
        cardUsername.textContent = userInfo.name
        githuhUsername.textContent = userInfo.username
        cardAvatar.src = userInfo.avatar
    }

}