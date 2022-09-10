interface Props {
  total: number;
  max: number;
  min: number;
}

export const generateRandomArray = ({ total, max, min }: Props) => {
  return Array.from({ length: total }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );
};

export const swapElements = (array: number[], y: number, x: number) => {
  const cache = array[y];
  array[y] = array[x];
  array[x] = cache;
};

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milliseconds);
  });
};
