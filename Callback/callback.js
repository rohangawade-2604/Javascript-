function Greet (name, callback){
    console.log("hello "+ name);
    callback();     // function as parameter and callback the saybyee function later 
};

function sayByee (){
    console.log("byee");
};

Greet("Rohan", sayByee)


// output:

    // hello Rohan
    // byee