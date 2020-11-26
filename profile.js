class Profile {
  constructor() {
    (this.clientId = ''), (this.clientSecret = '');
  }

  async getProfile(username) {
    let profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    let profile = await profileResponse.json();

    let todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
    let todo = await todoResponse.json();

    return {
      profile,
      todo,
    };
  }
}
