export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => { // create a new promise
    if (success === true) { // if the promise resolves, return the response
      resolve({
        status: 200,
        body: 'Success',
      });
    } else { // if the promise rejects, return the error
      reject(new Error('The fake API is not working currently'));
    }
  });
} // log a message to the console when the promise is resolved or rejected
