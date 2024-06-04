/*
Objectives:  small single-page web application with the following:
Use asynchronous JavaScript tools to build a responsive web application.
Demonstrate understanding of the JavaScript event loop.
Generate asynchronous code using Promises and async/await syntax.
Use fetch and/or Axios to interact with an external web API.
Organize files using modules and imports.
*/ 

//create a delay for each character name
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    //try to fetch the data
    try {

        //id that the user types in, get the elementName
        const disneyFilm = document.getElementById("disneyFilm").value.toLowerCase(); //the .toLowerCase() method makes it a chain method so that if the user types in caps, the value will be set to all lowercase for easier access
        //two lines. Fetches data. The "await" means to wait for the data to be fetched
        const results = await fetch("https://last-airbender-api.fly.dev/api/v1/characters"); //fetch the server and go to the list of disney characters
        console.log(results);

            if(!results.ok) {
                throw new Error("Network response was not valid");
            }     

            const data = await results.json();
            console.log(data);
    }
    catch (err) {
        console.log("Fetch error: ", err);
    }

            // //loops through the list of Disney characters fetched from the api
            // for (let i = 0; i < data.data.length; i++) {
            //     //wait 1 seconds before displaying each character's name
            //     await delay(1000);

            //     //create a new h1 element
            //     const nameDisplay = document.createElement("h1"); //select h1 and assign it to something 
            
            //     //sets the text of the element to the disney movies' name
            //     nameDisplay.innerText = data.data[i].films;

            //     //displays the element by appendingit g it to the body
            //     document.querySelector("body").appendChild(nameDisplay);
            // }
 
}

//fetchData callback function
fetchData();
