/*
Objectives:  small single-page web application with the following:
Use asynchronous JavaScript tools to build a responsive web application.
Demonstrate understanding of the JavaScript event loop.
Generate asynchronous code using Promises and async/await syntax.
Use fetch and/or Axios to interact with an external web API.
Organize files using modules and imports.
*/ 


async function fetchData() {
    // try to fetch the data
    try {
        // Two lines. Fetches data. The "await" means to wait for the data to be fetched
        const results = await fetch("https://api.disneyapi.dev/character"); //fetch the server and go to the list of disney characters
        if(!results.valid) {
        // console.log(result);
        throw new Error("Network response was not valid");
        } 

        const data = await results.json();
        console.log(data);
        
        
        // Loops through the list of pokemon fetched from the api
        for (let i = 0; i < data.results.length; i++) {
            // create a new h1 element
            const nameDisplay = document.createElement('h1'); //select h1 and assign it to something 
        
            // sets the text of the element to the disney characters' name
            nameDisplay.innerText = data.results[i].name;

            // displays the element by appending it to the body
            document.querySelector("body").appendChild(nameDisplay);
        }
    } catch (err) {
        console.log("Fetch error: ", err);
    }
}
  
fetchData();
