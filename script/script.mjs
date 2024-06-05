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
    //get the character name from the input field
    const avatar = document.getElementById("avatar").value;

    //display the character api when the user clicks on the Submit button
    const characterInfoDiv = document.getElementById("characterInfo");

    //clear any previous character information
    characterInfoDiv.innerHTML = "";

    //try to fetch the data
    try {
        //id that the user types in, get the elementName
        const avatar = document.getElementById("avatar").value.toLowerCase(); //the .toLowerCase() method makes it a chain method so that if the user types in caps, the value will be set to all lowercase for easier access
        
        //two lines. Fetches data. The "await" means to wait for the data to be fetched
        const results = await fetch(`https://last-airbender-api.fly.dev/api/v1/characters?name=${avatar}`); //fetch the server and go to the list of disney characters
        console.log(results);

            if(!results.ok) {
                throw new Error("Network response was not valid");
            }     

            const data = await results.json();
            console.log(data);

            //display character information
            displayCharacterInfo(data);
    }
    catch (err) {
        console.log("Fetch error: ", err);
    }
}

async function displayCharacterInfo(data) {
    const characterInfoDiv = document.getElementById("characterInfo");

    if (data.length === 0) {
        console.log("No character found.");
    }

    data.forEach(async (character, index) => {
        //wait 1 second before displaying each character's name
        await delay(1000 * index);

        //create a new div element for the character info
        const characterDiv = document.createElement("div");

        //create an h1 element for the character's name
        const nameElement = document.createElement("h1");
        nameElement.textContent = character.name;

        // Create a p element for the character's affiliation
        const affiliationElement = document.createElement("p");
        affiliationElement.textContent = character.affiliation || '';

        // Append the elements to the characterDiv
        characterDiv.appendChild(nameElement);
        characterDiv.appendChild(affiliationElement);

        // Display the element by appending it to the characterInfo div
        characterInfoDiv.appendChild(characterDiv);
    });
}

// Add event listener to the button
document.getElementById("fetchButton").addEventListener("click", fetchData);
