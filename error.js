class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
class UserManager {
  constructor() {
    this.users = [];
  }
  validateUsername(username) {
    if (!username) {
      throw new ValidationError("username", "Username needed")
    }
    if (username.length < 3) {
      throw new ValidationError("username", "Userneme bust me 3 latter");
    }
    if (this.users.find(u => u.username === username)) {
      throw new ValidationError("username", "username ashey")
    }
  }
  validateEmail(email) {
    if (!email) {
      throw new ValidationError("email", "Email প্রয়োজন");
    }

    if (!email.includes('@') || !email.includes('.')) {
      throw new ValidationError("email", "সঠিক Email দিন");
    }
  }
  validatePassword(password) {
    if (!password) {
      throw new ValidationError("password", "Password প্রয়োজন");
    }

    if (password.length < 8) {
      throw new ValidationError("password", "Password কমপক্ষে ৮ অক্ষর হতে হবে");
    }
  }
  register(username, email, password) {
    try {
      this.validateUsername(username);
      this.validateEmail(email);
      this.validatePassword(password);


      let user = {
        id: Date.now(),
        username,
        email,
        createdAt: new Date()
      };
      this.users.push(user);

      return {
        success: true,
        message: "Registration সফল!",
        user: user
      };


    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          success: false,
          field: error.field,
          message: error.message
        };
      }
      return {
        success: false,
        message: "Registration ব্যর্থ!"
      };
    }

  }
  displayUsers() {
    console.log("\n📋 Registered Users:");
    this.users.forEach(user => {
      console.log(`- ${user.username} (${user.email})`);
    });
  }
}
let userManager = new UserManager();

let result1 = userManager.register("safaat", "safaat@gmail.com", "12345678");
console.log(result1);
// {success: true, message: "Registration সফল!", user: {...}}

let result2 = userManager.register("ab", "invalid", "123");
console.log(result2);
// {success: false, field: "username", message: "Username কমপক্ষে ৩ অক্ষর হতে হবে"}

let result3 = userManager.register("safaat", "new@gmail.com", "password123");
console.log(result3);
// {success: false, field: "username", message: "Username ইতিমধ্যে আছে"}

userManager.displayUsers();