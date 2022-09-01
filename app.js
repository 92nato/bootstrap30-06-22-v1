/* 
BACKUP OF "thecatapi" IF YOU WANT CHANGE THE URL API
'https://api.thecatapi.com/v1/images/search'
*/
const URL ='https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById("randomCats");
        img.src = data[0].url
    });


/* Pocketbase */
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

// create user
const user = await client.users.create({
    email: 'test@example.com',
    password: '123456',
    passwordConfirm: '123456',
});

// set user profile data
const updatedProfile = await client.records.update('profiles', user.profile.id, {
    name: 'test',
});

// send verification email
await client.users.requestVerification(user.email);