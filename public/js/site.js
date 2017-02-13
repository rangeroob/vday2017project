var root = document.body

//pageOne
var count = 0;

//pageThree




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
                    onclick: (function() {
                        if (count < 100) count++;
                        else if (count === 100) location.href = '#!/two'
                    })
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
        var poem = [
            "I love you,", "In a House,", "With a Mouse,", "Here or There", "Anywhere",
            "In a Box", "with a Fox", "In a Car", "In a Tree", "On a Train", "In the Rain", "In the Dark", "With a Goat",
            "On a Boat", "Forever"
        ]
        return m("three.w3-content.w3-section",
            m("h1.w3-center", "A little poem"),
            m("h2.w3-center", "Titled: I Love You"),
            m("div.w3-center",
                m("p", poem[0]),
                m("p", poem[1]),
                m("p", poem[0]),
                m("p", poem[2]),
                m("p", poem[0]),
                m("p", poem[3]),
                m("p", poem[0]),
                m("p", poem[4]),
                m("p", poem[0]),
                m("p", poem[5]),
                m("p", poem[0]),
                m("p", poem[6]),
                m("p", poem[0]),
                m("p", poem[7]),
                m("p", poem[0]),
                m("p", poem[8]),
                m("p", poem[0]),
                m("p", poem[9]),
                m("p", poem[0]),
                m("p", poem[10]),
                m("p", poem[0]),
                m("p", poem[11]),
                m("p", poem[0]),
                m("p", poem[12]),
                m("p", poem[0]),
                m("p", poem[13]),
                m("p", poem[0]),
                m("h2", poem[14])
            ))


    }

}
m.route(root, "/splash", {
    "/splash": Splash,
    "/one": pageOne,
    "/two": pageTwo,
    "/three": pageThree,
})