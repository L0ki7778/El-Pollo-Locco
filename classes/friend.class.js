
class Friend extends Person{
    relationship;
    constructor(firstName,lastName,relationship){
        super(firstName,lastName);
        this.relationship = relationship;
    }

    printRelationship(){
        console.log("New Friend created: " + this.firstName + " " + this.lastName + " " + this.relationship);
    }
}