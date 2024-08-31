// window.addEventListener("DOMContentLoaded", () => {

// Sticky Header

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// Theme Toggle

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const docBody = document.querySelector("body");

// console.log(docBody)

if (themeToggleBtn) {

    themeToggleBtn.addEventListener("click", () => {

        if (docBody.classList.contains("dark")) {

            docBody.classList.remove("dark");

            themeToggleBtn.querySelector("i").classList.remove("fa-sun");
            themeToggleBtn.querySelector("i").classList.add("fa-moon");

        } else {

            docBody.classList.add("dark");

            themeToggleBtn.querySelector("i").classList.remove("fa-moon");
            themeToggleBtn.querySelector("i").classList.add("fa-sun");

        }

    })

}


// Mobile Menu Toggle

const menuToggleBtn = document.getElementById("menu-toggle-btn");

const mobileMenu = document.getElementById("mobile-menu");

// console.log(mobileMenu);

if (menuToggleBtn) {

    menuToggleBtn.addEventListener("click", () => {

        if (mobileMenu.classList.contains("mobile-menu-show")) {

            mobileMenu.classList.remove("mobile-menu-show");

            menuToggleBtn.querySelector("i").classList.remove("fa-xmark");
            menuToggleBtn.querySelector("i").classList.add("fa-bars");

        } else {

            mobileMenu.classList.add("mobile-menu-show");

            menuToggleBtn.querySelector("i").classList.remove("fa-bars");
            menuToggleBtn.querySelector("i").classList.add("fa-xmark");

        }
    })
}




// Counter 

const statsSec = document.getElementById("stats");
const counter = document.querySelectorAll(".counter");

if (statsSec) {
    const statsObserver = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            counter.forEach((singleCounter) => {

                let i = 0;

                const count = setInterval(() => {
                    singleCounter.innerText = ++i;

                    if (i == singleCounter.dataset.stop) {
                        clearInterval(count);
                    }

                }, 0.5);

            });

            statsObserver.unobserve(entries[0].target);
        }

    }, { threshold: 0.3 });

    statsObserver.observe(statsSec);
}



// To top btn

const toTopBtn = document.getElementById("to-top-btn");

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
})

if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
}



// About Video Box

const abVideoPlay = document.getElementById("ab-us-play-btn");
const abVideosec = document.getElementById("ab-video-sec");
const abVideoClose = document.getElementById("ab-video-box-close");

if (abVideoPlay) {

    abVideoPlay.addEventListener("click", () => {

        abVideosec.style.display = "block";
    });

    abVideoClose.addEventListener("click", () => {

        abVideosec.style.display = "none";
    });

}



// Owl Carosual

let testimonialSec = document.getElementById("testimonial");

if (testimonialSec) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}








// });




//Review Form Validation

let sendReviewSec = document.querySelector(".review-send");

if (sendReviewSec) {

    function reviewValidForm() {

        const reviewForm = document.forms["review-form"];

        const reFirstName = reviewForm['re-fr-name'].value.trim();
        const reLastName = reviewForm['re-ls-name'].value.trim();
        const reEmail = reviewForm['re-email'].value.trim();
        const rePh = reviewForm['re-ph'].value.trim();
        const reText = reviewForm['re-text'].value.trim();

        // console.log(reFirstName);

        if (reFirstName.length <= 0 || reLastName.length <= 0 || reEmail.length <= 0 || rePh.length <= 0 || reText.length <= 0) {

            document.getElementById("err-fr-name").innerText = "*Enter a valid name.";
            document.getElementById("err-ls-name").innerText = "*Enter a valid name.";
            document.getElementById("err-email").innerText = "*Enter a valid email.";
            document.getElementById("err-ph").innerText = "*Enter a valid phone number.";
            document.getElementById("err-review").innerText = "*Enter a valid review.";

            return false;

        } else {

            if (reFirstName.length > 7) {
                document.getElementById("err-fr-name").innerText = "*Name must be 7 letter.";
                return false;

            } else if (reFirstName.match(/[0-9]/g)) {
                document.getElementById("err-fr-name").innerText = "*Numbers are not allowed.";
                return false;

            } else if (reFirstName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
                document.getElementById("err-fr-name").innerText = "*Special character are not allowed."
                return false;

            }

            if (reLastName.length > 7) {
                document.getElementById("err-ls-name").innerText = "*Name must be 7 letter.";
                return false;

            } else if (reLastName.match(/[0-9]/g)) {
                document.getElementById("err-ls-name").innerText = "*Numbers are not allowed.";
                return false;

            } else if (reLastName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
                document.getElementById("err-ls-name").innerText = "*Special character are not allowed."
                return false;

            }

            if (!reEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                document.getElementById("err-email").innerText = "*Enter a valid email.";
                return false;
            }

            if (!rePh.match(/^\d{10}$/g)) {
                document.getElementById("err-ph").innerText = "*Enter a valid phone number.";
                return false;
            }

            if (reText.length < 30) {
                document.getElementById("err-review").innerText = "*Review must be contain 30 letter.";
                return false;
            }

        }

    }
}



// Comment Reply Form

const comReplyBtn = document.getElementById("com-reply");
const comReplyCancelBtn = document.getElementById("com-reply-cancel");

const comReplyFormSec = document.getElementById("com-reply-form");

const postComSec = document.getElementById("post-com-form");


if (comReplyBtn) {

    comReplyBtn.addEventListener("click", () => {
        comReplyFormSec.style.display = "block";
        postComSec.style.display = "none";
    })

    comReplyCancelBtn.addEventListener("click", () => {
        comReplyFormSec.style.display = "none";
        postComSec.style.display = "block";
    })
}


if (comReplyFormSec) {

    function validComReForm() {

        const commentReplyForm = document.forms["comment-re-form"];

        const comReText = commentReplyForm['comment-re-text'].value.trim();
        const comReName = commentReplyForm['comment-re-name'].value.trim();
        const comReEmail = commentReplyForm['comment-re-email'].value.trim();
        const comReWebsite = commentReplyForm['comment-re-website'].value.trim();
        const comReCheck = commentReplyForm['comment-author-save'];

        if (comReText.length <= 0 || comReName.length <= 0 || comReEmail.length <= 0) {

            document.getElementById("err-re-text").innerText = "* Comment must be 30 letter.";
            document.getElementById("err-re-name").innerText = "* Enter a valid name.";
            document.getElementById("err-re-email").innerText = "* Enter a valid Email.";

            return false;
        } else {

            if (comReText.length < 30) {
                document.getElementById("err-re-text").innerText = "* Comment must be 30 letter.";
            }

            if (comReName.length > 7) {
                document.getElementById("err-re-name").innerText = "*Name must be 7 letter.";
                return false;

            } else if (comReName.match(/[0-9]/g)) {
                document.getElementById("err-re-name").innerText = "*Numbers are not allowed.";
                return false;

            } else if (comReName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
                document.getElementById("err-re-name").innerText = "*Special character are not allowed."
                return false;
            }

            if (!comReEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                document.getElementById("err-re-email").innerText = "*Enter a valid email.";
                return false;
            }

            if (!comReCheck.checked) {
                document.getElementById("err-re-check").innerText = "* Please check this box.";
                return false;
            }

        }

    }

}


// const Post Comment Form


if (postComSec) {

    function validPostComForm() {

        const postComForm = document.forms["post-comment-form"];

        const postComText = postComForm['post-comment-text'].value.trim();
        const postComName = postComForm['post-comment-name'].value.trim();
        const postComEmail = postComForm['post-comment-email'].value.trim();
        const postComWebsite = postComForm['post-comment-website'].value.trim();
        const postComCheck = postComForm['post-comment-author-save'];

        if (postComText.length <= 0 || postComName.length <= 0 || postComEmail.length <= 0) {

            document.getElementById("err-post-com-text").innerText = "* Comment must be 30 letter.";
            document.getElementById("err-post-com-name").innerText = "* Enter a valid name.";
            document.getElementById("err-post-com-email").innerText = "* Enter a valid Email.";

            return false;
        } else {

            if (postComText.length < 30) {
                document.getElementById("err-post-com-text").innerText = "* Comment must be 30 letter.";
            }

            if (postComName.length > 7) {
                document.getElementById("err-post-com-name").innerText = "*Name must be 7 letter.";
                return false;

            } else if (postComName.match(/[0-9]/g)) {
                document.getElementById("err-post-com-name").innerText = "*Numbers are not allowed.";
                return false;

            } else if (postComName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
                document.getElementById("err-post-com-name").innerText = "*Special character are not allowed."
                return false;
            }

            if (!postComEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                document.getElementById("err-post-com-email").innerText = "*Enter a valid email.";
                return false;
            }

            if (!postComCheck.checked) {
                document.getElementById("err-post-com-check").innerText = "* Please check this box.";
                return false;
            }

        }

    }


}



//  Contact Form Validation

const contactFormSec = document.getElementById("contact-form-id");

if (contactFormSec) {

    function contactValidForm() {

        const contactForm = document.forms["contact-form"];

        const contactName = contactForm['contact-name'].value.trim();
        const contactEmail = contactForm['contact-email'].value.trim();
        const contactSubject = contactForm['contact-subject'].value.trim();
        const contactPh = contactForm['contact-ph'].value.trim();
        const contactMsg = contactForm['contact-msg'].value.trim();


        if (contactName.length <= 0 || contactEmail.length <= 0 || contactSubject.length <= 0 || contactPh.length <= 0 || contactMsg.length <= 0) {


            document.getElementById("err-con-name").innerText = "* Fill this Filed."
            document.getElementById("err-con-email").innerText = "* Fill this Filed."
            document.getElementById("err-con-subject").innerText = "* Fill this Filed."
            document.getElementById("err-con-ph").innerText = "* Fill this Filed."
            document.getElementById("err-con-msg").innerText = "* Fill this Filed."

            return false;

        } else {

            if (contactName.length > 7) {
                document.getElementById("err-con-name").innerText = "*Name must be 7 letter.";
                return false;

            } else if (contactName.match(/[0-9]/g)) {
                document.getElementById("err-con-name").innerText = "*Numbers are not allowed.";
                return false;

            } else if (contactName.match(/[$&+,:;=?@#|'<>.-^*()%!_-]/g)) {
                document.getElementById("err-con-name").innerText = "*Special character are not allowed."
                return false;

            }
            

            if (!contactEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                document.getElementById("err-con-email").innerText = "*Enter a valid email.";
                return false;
            }

            if (contactSubject.match(/[$+=?#|<>^*]/g)){
                document.getElementById("err-con-subject").innerText = "*Special character are not allowed.";
                return false;
            }

            if (!contactPh.match(/^\d{10}$/g)) {
                document.getElementById("err-con-ph").innerText = "*Enter a valid phone number.";
                return false;
            }

            if (contactMsg.length < 30) {
                document.getElementById("err-con-msg").innerText = "*Review must be contain 30 letter.";
                return false;
            }

        }

    }

}