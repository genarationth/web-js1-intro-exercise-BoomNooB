const ChangeName = () => {
    let userName = prompt("What's your name sir?")
    document.getElementById("inputName").innerHTML = `Hello ${userName} !`;

}