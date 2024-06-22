export const colors = ['rgb(255, 51, 0)', 'rgb(51, 204, 51)', 'rgb(0, 102, 255)', 'rgb(255, 255, 0)', 'rgb(255, 51, 204)', 'rgb(102, 0, 255)', 'rgb(255, 153, 51)', 'rgb(153, 102, 0)'];

export const _colors = [[255, 255, 255], [255, 51, 0], [51, 204, 51], [0, 102, 255], [255, 255, 0], [255, 51, 204], [102, 0, 255], [255, 153, 51], [153, 102, 0]];

export const parms = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get('numbers');
  return value ? Number(value) : 100000;
}

export const fpsCounter = function () {
  window.fps = 0;
  window.fpsElement = document.getElementById("fps");

  setInterval(() => {
    window.fpsElement.textContent = fps;
    window.fps = 0;
  }, 1000);
}

export const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const _getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(result === 2) return _getRandomInt(min, max);

  return result;
}

export const invert = function (n) {
  let result = 0;
  if(n === 4) {
    result = 0;
  }
  else if (n === 3) {
    result = 1;
  }
  else if (n === 0) {
    result = 4;
  }
  else if (n === 1) {
    result = 3;
  }
  return result;
}