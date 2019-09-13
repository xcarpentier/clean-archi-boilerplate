export const delayPromise = (timer: number = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(), timer))
