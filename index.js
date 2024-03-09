fetch("./data.json")
    .then(response => response.json())
    .then(myPeople => loadPeople(myPeople));

function loadPeople(myPeople) {
    var mainContainer = document.getElementById("us");
    mainContainer.innerHTML = "";

    for (var i = 0; i < myPeople.us.length; i++) {
        let name = myPeople.us[i].name;
        let year = myPeople.us[i].year;
        let email = myPeople.us[i].email;
        let description = myPeople.us[i].description;
        let url = myPeople.us[i].url;

        let div = document.createElement("div");
        div.className = 'person'; // Add class for styling
        // Create a container for centered content
        let centeredContent = `<div style="text-align: center;">
                                    <h3>${name}</h3>
                                    ${email} <br>
                                    <img src="${url}" width="200" style="max-width: 100%; height: auto;">
                               </div>`;
        // Keep year and description aligned to the left
        let additionalInfo = `<div>
                                ${year} <br>
                                ${description} <br>
                              </div>`;
        // Combine the centered content with the left-aligned text
        div.innerHTML = centeredContent + additionalInfo;
        mainContainer.appendChild(div);
    }
}
