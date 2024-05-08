let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data=", DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "Some new data"
    }
}

let student1 = new User("Geetha", "geetha@gmail.com");
let student2 = new User("Akshaya", "akki@gmail.com");

let teacher1 = new User("Dean", "dean@college.com");

let admin1 = new Admin("Admin", "admin@college.com");