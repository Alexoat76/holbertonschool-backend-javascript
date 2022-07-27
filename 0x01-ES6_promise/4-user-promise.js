// returns a promise object that resolves with the user's full name
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
