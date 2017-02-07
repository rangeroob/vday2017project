var root = document.body

//pageOne
var count = 0;

//pageThree

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = window.setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';

}
// getting slides[currentSlides] is undefined line 13
var Splash = {

    view: function() {

        return m("splash", {
            class: "color-primary-4"
        }, [

            m("h1.w3-container.w3-center.w3-jumbo", "Happy Valentine's Day"),
            m("h2.w3-container.w3-panel.w3-center.w3-xxlarge", "I love you and it’s getting worse"),
            m("h3.w3-container.w3-center.w3-xlarge", "Find out how you can help"),
            m("a.w3-container.w3-btn-block.w3-theme-d4.w3-jumbo", {
                href: "#!/one"
            }, "Enter Here"),

        ])
    }
}

var pageOne = {

    view: function() {

        return m("one", [
            m("h1.w3-center", {
                class: "pageonetitle"
            }, "How much do you love me?"),
            m("button.w3-btn-block", {
                    onclick: function() {
                        if (count < 100) count++;
                        else if (count === 100) location.href = '#!/two'
                    }
                },
                count + " %"),
        ])
    }
}

var pageTwo = {

    view: function() {
        return m("two", [
            m("h1.w3-center", "Aw you love me that much, huh?"),
            m("h2.w3-center", "here this is for you:"),
            m("a[href='#!/three']",
                m("img.w3-container[alt='heart'][src='public/imgs/Love_Heart_SVG.svg.png']", {
                    style: {
                        "display": "block",
                        "margin": "auto",
                        "width": "auto",
                        "height": "500px",
                        "border": "0"
                    }
                })),
            m("p.w3-center", "click me"),
        ])
    }
}

var pageThree = {
    view: function() {
        return m("three",
            m("ul[id='slides']", [
                m("li.slide.showing",
                    "Slide 1"
                ),
                m("li.slide",
                    "Slide 2"
                ),
                m("li.slide",
                    "Slide 3"
                ),
                m("li.slide",
                    "Slide 4"
                ),
                m("li.slide",
                    "Slide 5"
                ),

            ]))
    }
}

m.route(root, "/splash", {
    "/splash": Splash,
    "/one": pageOne,
    "/two": pageTwo,
    "/three": pageThree,
})