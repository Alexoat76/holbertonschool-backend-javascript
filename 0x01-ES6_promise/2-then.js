export default function handleResponseFromAPI(promise) {
  return promise // return the promise to the caller of this function
    .then(() => ({ // if the promise resolves, return the response
      status: 200,
      body: 'success',
    }))
    .catch(() => Error()) // if the promise rejects, return the error
    .finally(() => console.warn('Got a response from the API'));
} // log a message to the console when the promise is resolved
