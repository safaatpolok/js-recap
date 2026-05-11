fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(users => {
    console.log(users);
    users.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });

async function getUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await response.json();

    console.log(users);

    users.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.log("Error:", error)
  };

}
getUsers();


async function getUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);

    }
    let users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Error", error.message);
  }
}

getUsers();


async function ceratePost() {
  try {
    let newPost = {
      title: "my new post",
      body: "post details",
      userId: 1
    };
    let response = await fetch(''), {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newPost)
  }

  }
  
}