export const selectionSnippets = {
  js: `
    const selectionSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
    
      for (let i = 0; i < length; i++) {
        let minValue = i;
    
        for (let j = i + 1; j < length; j++) {
          if (array[j] < array[minValue]) {
            minValue = j;
          }
        }
    
        if (minValue != i) {
          // Swapping the elements
          const tmp = array[i];
          array[i] = array[minValue];
          array[minValue] = tmp;
        }
      }
    
      return array;
    }
    `,
};
