// Defining Object 
let Person ={
    first_name : "Akshat",
    last_name : "Soni",

    // method 
    getFun : function () {
        return(
            `The name of the persone is ${Person.first_name} ${Person.last_name}.`
        )
    },

    phone_number : {
        mobile: 12345,
        landline : 12412,
    }
}


console.log(Person.getFun())