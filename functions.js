var heading = document.getElementById("heading1")
var button1 = document.getElementById("btn1")
var img = document.getElementById("imgContainer")
var quotes = ["Hello There", "This is a randomized quote","You got the last quote", 
"How many are there?", "This is getting tiresome", "Have you ever heard of someone named Tundra?",
"Quite Unusual", "This took longer than it should've", "How long are you gonna be here for?",
"I have trust issues", "You should not spam the randomize button"]
var folderPath = "images/gifs"
var gifs = ["huh-cat-huh-m4rtin.gif","cat-stare-vine-boom-hehehe.gif", "cat-explode.gif",
"cat-furios.gif","bobbychess-chess.gif", "cat0.gif", "cat-food.gif", "excited-kitten-kitty.gif"];
let prevIndex = null, prevGifIndex = null;
function diffIndex(pIndex, main, mainArray)
{
     while (pIndex != null && pIndex == main) 
     {
          main = Math.round(Math.random() * (mainArray.length - 1))
     }
     return main;
}
function SetContent()
{
     img.src = "";
     let index = Math.round(Math.random() * (quotes.length - 1))
     let gifIndex = Math.round(Math.random() * (gifs.length - 1))
     index = diffIndex(prevIndex, index, quotes);
     gifIndex = diffIndex(prevGifIndex, gifIndex, gifs);
     prevIndex = index; prevGifIndex = gifIndex;
     console.log("Previous index: " + prevIndex);
     console.log("Previous gif index: " + prevGifIndex);
     heading.innerHTML = quotes[index]
     img.src = "images/gifs/" + gifs[gifIndex]
}

SetContent();
