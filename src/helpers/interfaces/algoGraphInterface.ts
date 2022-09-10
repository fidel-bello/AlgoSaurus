export interface AlgoGraphInterface {
  isAlgorithmRunning: boolean;
  setIsAlgorithmRunning: React.Dispatch<React.SetStateAction<boolean>>;
  data: number[] | null;
  delay: number;
}
