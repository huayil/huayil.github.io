// set up text to print, each item in array is new line
var aText = new Array(
    "Howdy!", 
    "My name is Huayi Li.",
    "",
    "I am a college professor, a researcher, and an automotive engineer.",
    "I study controls for mobility systems, such as self-driving cars, by applying game-theoretic, set-theoretic, and optimal control techniques.",
    "",
    "I teach ME 440 Design of Control Systems in Fall 2023 at the Paducah campus of the University of Kentucky.",
    "",
    "This website is currently under development.",
    "Meanwhile, you may find me on Google Scholar and LinkedIn.",
    "",
    "Thanks for visiting :)",
    "",
    );
    var iSpeed = 40; // time delay of print out
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
