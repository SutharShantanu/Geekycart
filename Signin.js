

let form = document.querySelector("form");

let Bag = JSON.parse(localStorage.getItem("masai")) || []

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {
        name: form.Fname.value,
        email: form.email.value,
        pass: form.password.value
    }
    Bag.push(obj)
    localStorage.setItem("masai", JSON.stringify(Bag))
    alert("Your Account has been Successfully Created")
    window.location.href = "Login.html"
})