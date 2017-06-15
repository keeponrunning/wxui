export default (array, length) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const x = Math.floor(i / length);
    if (!result[x]) result[x] = [];
    result[x].push(array[i]);
  };

  let endless = result[result.length - 1];
  const fill = length - endless.length;

  for (let j = 0; j < fill; j++) {
    endless.push({})
  };

  return result;
};