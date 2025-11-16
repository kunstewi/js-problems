// Implement a private variable using closures.

function createPrivateVariable(){
    let privateVariable = "This is Private";

    return {
        getPrivateVariable: function(){
            return privateVariable;
        },
        setPrivateVariable: function(value){
            privateVariable = value;
        }
    };
}

console.log(privateVariable); // Not accessible 

// To access the private variable outside
const privateVarHandler = createPrivateVariable();
console.log(privateVarHandler.getPrivateVariable());

// To modify its value
privateVarHandler.setPrivateVariable("New Value");
console.log(privateVarHandler.getPrivateVariable);

// Might not be the best way