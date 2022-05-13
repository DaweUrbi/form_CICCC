
//Add event listener for submitting the form
//Create validations 
//Loop through params object
        
//Use switch for different types of input to get values
//Append form results in results div
//Bonus: add styling to the page


const results = document.getElementById("reseults");
const form =document.getElementById("form");

form.addEventListener("submit" , function(e) {
    e.preventDefault();
    // results.innerHTML = "";
    const params = new FormData(form);
    console.log(params.entries());

    for (let pair of params.entries()) {
        // [  key  ,  value  ]
        //  pair[0]  pair[1]
        let pKey = document.createElement('p');
        let pValue = document.createElement('p');
        if (pair[1]) {
            let value = "";
            switch (pair[0]) {

                case "picture":
                    console.log(paor[1]);
                    value = pair [1].name? pair[1].name: "No file chosen";
                    break;
                default:
                    value = pair[1];
            }
            pKey.textContent = `${pair[0]} : `;
            pValue.textContent = value;
            results.appendChild(pKey);
            results.appendChild(pValue);
        }

    }
    
})


