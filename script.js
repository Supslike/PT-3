var user_input = document.getElementById("int-collecter");
var odd_container = document.getElementById("odd-container")
var even_container = document.getElementById("even-container")
var even_res = document.getElementById("sum-even");
var odd_res = document.getElementById("sum-odd");

var number_input = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function process() {
    let new_element = document.createElement("p");
    new_element.textContent = user_input.value
    if (user_input.value % 2 == 0) {
        even_container.appendChild(new_element);  
    }
    else {
        odd_container.appendChild(new_element);  
    }
    user_input.value = ""
    number_input++
    if (number_input == 25) {
        user_input.disabled = true;
    }
    let odd_sum = 0
    let even_sum = 0
    for (let i = 0; i < odd_container.children.length; i++) {
        odd_sum += Number(odd_container.children[i].textContent);
    }
    for (let i = 0; i < even_container.children.length; i++) {
        even_sum += Number(even_container.children[i].textContent);
    }

    for (let i = Number(odd_res.textContent); i <= odd_sum; i++) {
        odd_res.textContent = i;
        await sleep(1)
    }   

    for (let i = Number(even_res.textContent); i <= even_sum; i++) {
        even_res.textContent = i;
        await sleep(1)
    }
}

document.addEventListener("keydown", async function(ev) {
    if (ev.key == "Enter") {
        if (number_input == 25) {
            return
        }

        else if (user_input.value == "") {
            alert("Input a number first!")
            return
        }

        else if (user_input.value < 0) {
            alert("Input a positive integer!")
            return
        }
        await process()
        
    }
})

document.getElementById("submit").addEventListener("click", async function() {
    if (number_input == 25) {
        return
    }
    else if (user_input.value == "") {
        alert("Input a number first!")
        return
    }
    else if (user_input.value < 0) {
        alert("Input a positive integer!")
        return
    }
    await process()
        
})