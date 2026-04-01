const b = document.querySelector(".b")
const c = document.querySelector(".c")
const d = document.querySelector(".d")


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
})

// 2. tell it what to watch
observer.observe(b)
observer.observe(c)
observer.observe(d)
const sections = document.querySelectorAll(".a, .b, .c, .d");
const navLinks = document.querySelectorAll("nav a");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));

            const id = entry.target.getAttribute("id");
            document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer2.observe(section));