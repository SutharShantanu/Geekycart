let form = document.querySelector("form");

let signupData = JSON.parse(localStorage.getItem("masai"));


form.addEventListener("submit", myFun);
let n;

function myFun (event) {
    event.preventDefault()
    // let n = "";
    let x = document.querySelector("#email").value;
    let y = document.querySelector("#password").value;
    let flag = false;
    function login (data) {
        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i].email === x && data[i].pass === y) {
                flag = true;
                n = data[i].name;
                break;
            }
        }
        if (flag == true) {
            alert("Welcome ");
            // n = data[i].name;
        } else {
            alert("Please fill Correct Details");
        }
    }
    login(signupData);
    window.location.href = "index.html";
    let user = n;
    document.querySelector(".userOf").innerText = user;
}

// yeh last ki do line wala code index,js pe bhi kr do