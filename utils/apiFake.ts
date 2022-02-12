export const api = () => {
  if (Math.random() > 0.4) {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }
  return new Promise((resolve, reject) => setTimeout(reject, 3000));
};
