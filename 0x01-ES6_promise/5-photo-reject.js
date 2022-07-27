// Returns a promise that resolves with a string or rejects with an error
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
