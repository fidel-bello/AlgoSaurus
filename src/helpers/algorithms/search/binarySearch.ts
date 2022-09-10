import { sleep } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";

export const binary = async({
    
    dataSet,
    setDataSet,
    delay,
    setCurrentIndex,
    setCurrentIndex2,
    target,
    setCurrentIndex3,

}: AlgoInterface) => {
    if(!dataSet) return null;
    if(!setDataSet) return null;
    if(!setCurrentIndex2) return null;
    if(!setCurrentIndex3) return null;
    if(!target) return null;

    const array = dataSet;
    const length = dataSet.length;

    let start = 0;
    let end = length - 1

    while(start <= end){
        const mid = Math.floor((start + end)/2)
        setCurrentIndex(start)
        setCurrentIndex2(end)
        setCurrentIndex3(mid)

        await sleep(delay)
        setDataSet([...array])


    if(array[mid] === target) {
            return mid
        }
    else if (target > array[mid]){ 
         start = mid + 1
    } 
    else if(target < array[mid]){
        end = mid - 1
    }
}
   return -1

    
    }

