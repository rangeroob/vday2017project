var root = document.body

var count = 0 ;



var Splash = {

    view: function() {
        
        return m("splash",{class:"color-primary-4"},
        [
        
            m("h1.w3-container.w3-center.w3-jumbo", "Happy Valentine's Day"),
            m("h2.w3-container.w3-panel.w3-center.w3-xxlarge", "I love you and it’s getting worse"),
            m("h3.w3-container.w3-center.w3-xlarge", "Find out how you can help"),
            m("a.w3-container.w3-btn-block.w3-theme-d4.w3-jumbo", {href: "#!/one"} ,"Enter Here"),
       
       ])
    }
}

var pageOne = {

    view: function() {

        return m("main",
        [
            m("h1.w3-center", {class:"title"}, "How much do you love me?"),
            m("button.w3-btn-block", {onclick: function() {if(count < 100)count ++;else if(count === 100) document.write("<h1>Hello World!</h1><p>Have a nice day!</p>")}}, count + " %"),
        ])
    }
}

var pageTwo = {

    view: function() {
        return m("two",
         [

        ])
    }
}

m.route(root,"/splash", {
    "/splash": Splash,
    "/one": pageOne,
    "/two": pageTwo,
})
