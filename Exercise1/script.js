const ChangeName = () => {
    userName = prompt("What's your name sir?")
    const element = document.getElementById("inputName");
    document.getElementById("inputName").innerHTML = `Hello ${userName} !`;

}