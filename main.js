// Constants

const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote');



// API Array
let apiMotivation = [];


//  Displaying random quote
function newQuote(){
    const quote = apiMotivation[Math.floor(Math.random()* apiMotivation.length)]
    
    if(!quote.author){
        quote.author= "Unknown";        
    }
    authorText.textContent= quote.author;
    quoteText.textContent= quote.text;
}


//  Main system
async function getMotivation(){
    const apiUrl = "https://type.fit/api/quotes";
 

    try{
        const respone = await fetch(apiUrl);
        apiMotivation = await respone.json();
        newQuote();
        
    } catch{
        // Catch error
    }
}

// Button

newQuoteBtn.addEventListener('click',newQuote);


//  Calling just to check
getMotivation();