var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

document.getElementById("toggleButton").addEventListener("click", function () {
    var contents = document.getElementsByClassName("content");
    var buttonText = this.textContent;
    var expandAll = buttonText.includes("Expand");

    for (var j = 0; j < contents.length; j++) {
        var content = contents[j];
        var coll = content.previousElementSibling;

        if (expandAll) {
            content.style.display = "block";
            coll.classList.add("active");
        } else {
            content.style.display = "none";
            coll.classList.remove("active");
        }
    }

    this.textContent = expandAll ? "- Collapse All" : "+ Expand All";
});