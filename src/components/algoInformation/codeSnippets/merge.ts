export const mergeSnippets = {
  js: `
    const mergeSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
      const temp = [];
      const front = 0;
      const back = length - 1;
    
      const divide = (array:, temp, front, end) => {
        if (front < end) {
          const mid = Math.floor((end + front) / 2);
           divide(array, temp, front, mid);
           divide(array, temp, mid + 1, end);
           merge(array, temp, front, mid, end);
        }
      };
      
      const merge =  (
        array,
        temp,
        start,
        mid,
        end
      ) => {
        const sorted = [];
        let i = start;
        let j = mid + 1;
    
        while (i <= mid && j <= end) {
          if (array[i] <= array[j]) {
            sorted.push(array[i++]);
          } else {
            sorted.push(array[j++]);
          }
        }
    
        while (i <= mid) {
          sorted.push(array[i++]);
        }
    
        while (j <= end) {
          sorted.push(array[j++]);
        }
    
        const indexes = [];
        for (let i = start; i <= end; ++i) {
          indexes.push(i);
        }
    
        for (let i = start; i <= end; ++i) {
          array[i] = sorted[i - start];
          temp.push([i, array[i], indexes]);
        }
      };
    
      divide(array, temp, front, back);
    
      return array;
    };
    `,
};
