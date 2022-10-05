export const quickSnippets = {
  js: `
    \`\`\`javascript
    const quickSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
      const moves = [];
      const curr = 0;
      const end = length - 1;
    
      const divider = (moves, array, start, end) => {
        if (start < end) {
          const pivot = partition(moves, array, start, end);
    
          divider(moves, array, start, pivot - 1);
          divider(moves, array, pivot + 1, end);
        }
      };
    
      divider(moves, array, curr, end);
    
      return array;
    };
    
    const partition = (moves, array, start, end) => {
      let prv = start - 1;
      for (let index = start; index < end; ++index) {
        if (index !== end) {
          moves.push([index, end]);
        }
        if (array[index] < array[end]) {
          ++prv;
          swapElements(array, index, prv);
          moves.push([index, prv]);
        }
      }
    
      swapElements(array, prv + 1, end);
      moves.push([end, prv + 1]);
      return prv + 1;
    };
    \`\`\`
    `,
};
