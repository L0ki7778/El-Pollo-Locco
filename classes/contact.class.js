
class Contact extends Person{
    phone;

    constructor(firstName, lastName,phone){
        super(firstName, lastName);
        this.phone = phone;
    }

    call(){
        window.location.href = "tel:" + this.phone;
    }
    
    printFullName(){
        console.log("New Contact created: " + this.firstName + " " + this.lastName);
    }
}
