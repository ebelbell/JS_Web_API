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

        if(!results.ok) {
        // console.log(result);
        throw new Error("Network response was not valid");
    } 

        const data = await results.json();
        console.log(data);

        // create a delay for each character name
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        

        // Loops through the list of Disney characters fetched from the api
        for (let i = 0; i < data.data.length; i++) {
            // wait 2 seconds before displaying each character's name
            await delay(1000);

            // create a new h1 element
            const nameDisplay = document.createElement("h1"); //select h1 and assign it to something 
        
            // sets the text of the element to the disney characters' name
            nameDisplay.innerText = data.data[i].name;

            // displays the element by appending it to the body
            document.querySelector("body").appendChild(nameDisplay);
        }
    } catch (err) {
        console.log("Fetch error: ", err);
    }
}
  
fetchData();
