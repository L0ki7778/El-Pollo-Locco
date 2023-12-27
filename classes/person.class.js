class Person{
    firstName;
    lastName;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printFullName(){
        console.log("New Contact created: " + this.firstName + " " + this.lastName);
    }
}
