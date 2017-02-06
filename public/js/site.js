var root = document.body

var count = 0;




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
        return m("three", [
            onload: function carousel() {
                //placeholder
            }
            m("div.w3-content.w3-section", {
                    style: { "max-width": "500px" }
                }, m("p", "text here"),
                m("img.mySlides.w3-animate-fading[src='public/imgs/11391456_10207210124710859_4756487654378708258_n.jpg']", { style: { "width": "100%" } }),
                m("img.mySlides.w3-animate-fading[src='public/imgs/12592258_10209357967485586_675038987809379215_n.jpg']", { style: { "width": "100%" } }),
                m("img.mySlides.w3-animate-fading[src='public/imgs/15747902_10211941713037610_3506112968939664692_n.jpg']", { style: { "width": "100%" } }),
                m("img.mySlides.w3-animate-fading[src='public/imgs/16252514_1401420696535254_833255865077845373_o.jpg']", { style: { "width": "100%" } }),
                m()
            )

        ])
    }
}

m.route(root, "/splash", {
    "/splash": Splash,
    "/one": pageOne,
    "/two": pageTwo,
    "/three": pageThree,
})