export const heapSnippets = {
  js: `
    const heapSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
      const moves = [];
    
      const heapify = (temp, array, length, index) => {
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
    
        if (left < length && array[left] > array[largest]) {
          largest = left;
        }
    
        if (right < length && array[right] > array[largest]) {
          largest = right;
        }
    
        if (largest !== index) {
          temp.push([index, largest]);
          swapElements(array, index, largest);
    
          heapify(temp, array, length, largest);
        }
      };
    
      for (let i = Math.ceil(length / 2) - 1; i >= 0; --i) {
        heapify(moves, array, length, i);
      }
    
      for (let index = length - 1; index >= 0; --index) {
        moves.push([index, 0]);
        swapElements(array, index, 0);
        heapify(moves, array, index, 0);
      }
    
      return moves;
    };
    `,
};
