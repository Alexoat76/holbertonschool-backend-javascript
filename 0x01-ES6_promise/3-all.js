import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]) // returns an array of promises
    .then((resp) => {
      const { body } = resp[0]; // first element of the array
      const { firstName, lastName } = resp[1]; // second element of the array
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline')); // catch the error if any of the promises fails
}
