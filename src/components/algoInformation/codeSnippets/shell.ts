export const shellSnippets = {
  js: `
    const shellSort= ({ dataSet }) => {
      let increment = dataSet.length / 2;
      const arr = dataSet;
    
      while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
          let j = i;
          const temp = arr[i];
          setCurrentIndex(temp);
    
          while (j >= increment && arr[j - increment] > temp) {
            arr[j] = arr[j - increment];
            j = j - increment;
            setCurrentIndex(arr[i]);
            setCurrentIndex2(j);
            setDataSet([...arr]);
            await sleep(delay);
          }
          arr[j] = temp;
          setCurrentIndex(temp);
          setCurrentIndex2(i);
          setCurrentIndex3(arr[i]);
    
          await sleep(delay);
    
          setDataSet([...arr]);
        }
        if (increment == 2) {
            increment = 1;
          } else {
            // @ts-ignore
            increment = parseInt((increment * 5) / 11);
          }
        }
        setDataSet([...arr]);
        // setIsAlgorithmRunning(false);
      }
    `,
};
