export const insertionSnippets = {
  js: `
    const insertionSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
    
      for (let i = 0; i < length; i++) {
        const current = array[i];
        let j = i - 1;
    
        while (j > -1 && current < array[j]) {
          array[j + 1] = array[j];
          j--;
        }
        array[j + 1] = current;
      }
    
      return array;
    };
    `,
};
