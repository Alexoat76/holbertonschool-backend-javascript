export default function taskBlock(trueOrFalse) { // create a function that returns true or false
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
      const task = true;
    // eslint-disable-next-line
      const task2 = false;
  }

  return [task, task2]; // return an array of the two tasks
}
