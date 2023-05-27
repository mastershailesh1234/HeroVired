class Login {
    #password
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.#password = password;
    }

    loginSuccess(username, password) {
        if (username == this.username && password == this.#password) {
            console.log("Login successful");
        }else {
            console.log("Try again");
        }
    }

    getPassword() {
        return this.#password;
    }

    setPassword(newPassword) {
        this.#password = newPassword;
    }
}

const p1 = new Login("Shakul", "smalik", "123456");
const p2 = new Login("Karthik", "karthiky", "345678");

p1.loginSuccess ("malik", "23456");
console.log(p1.password);
console.log(p2.password);
console.log(p1.getPassword());
p1.setPassword("1237");
console.log(p1.getPassword());

p2.loginSuccess("karthiky", "345678");