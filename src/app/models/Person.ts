export class Person {
    public name: string;
    public picturePath: string;
    public birthdate: string;
    public bornIn: string;
    public profession: string;
    // added variables for username and password
    public username: string;
    public password: string;

    public constructor(name: string, path: string, birthdate: string, bornIn: string, 
            profession: string, username: string, password: string) {
        this.name = name;
        this.picturePath = path;
        this.birthdate = birthdate;
        this.bornIn = bornIn;
        this.profession = profession;
        // username and password
        this.username = username;
        this.password = password;
    }
}