let profile = document.getElementById("profile");
let content = document.getElementById("content");


profile.innerHTML = "<h1>Janregx's Profile</h1>";
content.innerHTML = "<p>Content of website</p>"

const entry = document.getElementById("entry");
entry.appendChild(
    tag("div", 
        tag("h1", "hello, world!").attribute("style", "color:9999bb; background-color:red")
    ).attribute("style", "display:flex; align-items:center; justify-content:center")
);
