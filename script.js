
function getUsers() {
  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => displayUsers(data.data))
    .catch(error => console.log(error));
}

function displayUsers(users) {
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    const avatar = document.createElement('img');
    avatar.src = user.avatar;

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    const name = document.createElement('p');
    name.textContent = `${user.first_name} ${user.last_name}`;
    const email = document.createElement('p');
    email.textContent = user.email;

    userInfo.appendChild(name);
    userInfo.appendChild(email);

    userCard.appendChild(avatar);
    userCard.appendChild(userInfo);

    usersContainer.appendChild(userCard);
  });
}