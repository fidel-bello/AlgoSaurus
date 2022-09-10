import { sleep } from "../../../functions/helperFunctions";
import { AlgoInterface } from "../../../interfaces/algoInterface";

export const linear = async({ 
    dataSet,
    setDataSet,
    delay,
    target,
    setCurrentIndex,
}: AlgoInterface) => {
    if(!dataSet) return null;
    if(!setCurrentIndex) return null;

    const array = dataSet;
    const length = dataSet.length

    for(let i = 0; i < length; ++i){

        setCurrentIndex(i);
        if(array[i] === target){
            return i;
        } else {
        return -1;
        }
        await sleep(delay);
        setDataSet([...array]);
    }
}