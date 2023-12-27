let names=[];

function addContact(fn,ln,phone){
    let person = new Contact(fn,ln,phone);
    names.push(person);
}

function addFriend(fn,ln,relationship){
    let person = new Friend(fn,ln,relationship);
    names.push(person);
}

addFriend("Bob","Smith","friend");
addFriend("Sally","Smith","friend");
addFriend("Rene","Heller","friend");

addContact("Bob","Smith","555-555-5555");
addContact("Sally","Smith","555-555-5555");
addContact("Rene","Heller","555-555-5555");