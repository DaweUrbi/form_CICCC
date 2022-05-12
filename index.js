const params = new FormData(form);
console.log(params.entries())
//Add event listener for submitting the form


const results = document.getElementById("reseults");
const form =document.getElementById("form");

form.addEventListener("submit" , function(e) {
    e.preventDefault();
})




// const addForm = (name, email, password,) => {
//     const newDIV = document.createElement("div");
//     const br = document.createElement("br");
//     results.append(`Name: ${name}`)
//     results.append(br)
//     form.elements.name.value = "";
//     results.append(`Email: ${email}`)
//     form.elements.email.value = "";
//     results.append(br)
//     results.append(`password: ${password}`)
//     form.elements.password.value = "";
//     results.append(br)

//     results.append(newDIV);
    
// }



//Create validations 
//Loop through params object
        
//Use switch for different types of input to get values
//Append form results in results div
//Bonus: add styling to the page