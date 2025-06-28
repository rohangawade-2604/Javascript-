const Student = {
    name: "Rngfires",
    age: 22,
    CGPA: 9.0,
    isGraduated: true,
 
}

// if const has an object, we can change the properties of the object but we cannot reassign the object to another object.

console.log(Student);

Student["age"] = Student["age"] + 1; // Incrementing age by 1 using bracket notation , answer will be 23

Student["name"] = "Rohan Gawade";   // Changing name using bracket notation

console.log(Student.name); // Output: Rngfires , after the dot operator, we can access the properties of the object.

console.log(Student["age"]) ; // Output: 22 , after using the bracket notation, we can access the properties of the object.