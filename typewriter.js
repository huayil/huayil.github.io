var myCV = '<a href="./hl_cv_2p.pdf" target="_blank">CV (click to visit)</a>';
var myGS = '<a href="https://scholar.google.com/citations?user=8cgJVukAAAAJ" target="_blank">Google Scholar</a>';
var myLI = '<a href="https://www.linkedin.com/in/lihuayi" target="_blank">LinkedIn</a>';

var aText = new Array(
    "Howdy!",
    "",
    "My name is Huayi Li.",
    "I am an Assistant Professor in Mechanical and Aerospace Engineering.",
    "I received my PhD at the University of Michigan, Ann Arbor in 2022.",
    "",
    "My research focuses on constrained and optimal control for mobility applications, such as aircraft and self-driving cars, by applying game-theoretic and set-theoretic techniques.",
    "I also teach in the field  of autonomous systems and control.",
    "",
    "Please feel free to check out my research projects and taught courses on this website.",
    "",
    "Thanks for visiting :)",
    "",
    "73"
    );
var iSpeed = 22; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    

function typewriter()
{

    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");

    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}

typewriter();
