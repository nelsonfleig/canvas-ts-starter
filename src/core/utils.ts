export const randomIntFromRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomFloatFromRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const degToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const radToDeg = (radians: number) => {
  return radians * (180 / Math.PI);
};

export const map = (value: number, min1: number, max1: number, min2: number, max2: number) => {
  if (min1 > max1) {
    const temp = min1;
    min1 = max1;
    max1 = temp;
  }
  if (min2 > max2) {
    const temp = min2;
    min2 = max2;
    max2 = temp;
  }
  return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
};
