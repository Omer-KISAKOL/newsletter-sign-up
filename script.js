"use strict";

// Elements
const signUpCardEl = document.querySelector(".big-box");
const successCardEl = document.querySelector(".big-box2");
const signUpFormEl = document.querySelector(".form_email");
const emailIn = document.getElementById("email");
const submitBtn = document.querySelector(".btn_submit");
const dismissBtn = document.querySelector(".btn-dis");
const submittedEmailEl = document.querySelector(".submitted_email");


submitBtn.addEventListener("click", submitEmail);
dismissBtn.addEventListener("click", toggleCards);


function toggleCards() {
    signUpCardEl.classList.toggle("d-none");
    successCardEl.classList.toggle("d-none");
}


function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}


function submitEmail(e) {
    e.preventDefault();

    if (validateEmail(emailIn.value)) {
        submittedEmailEl.innerText = emailIn.value;
        toggleCards();
        emailIn.value = "";
        signUpFormEl.classList.remove("error");
    }
    else {
        signUpFormEl.classList.add("error");
    }
}