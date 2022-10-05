export const bubbleSnippets = {
  js: `
    const bubbleSort = ({ arr }) => {
        
      for(var i = 0; i < arr.length; i++){
         
        // Last i elements are already in place 
        for(var j = 0; j < ( arr.length - i -1 ); j++){
           
          // Checking if the item at present iteration
          // is greater than the next iteration
          if(arr[j] > arr[j+1]){
             
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
      }
      
      // Print the sorted array
      console.log(arr);
     }
    `,
  python: `
  def bubbleSort(arr):
    n = len(arr)
 
    # Traverse through all array elements
    for i in range(n):
 
        # Last i elements are already in place
        for j in range(0, n-i-1):
 
            # traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
 
 
  # Driver code to test above
  if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
 
    bubbleSort(arr)
 
    print("Sorted array is:")
    for i in range(len(arr)):
      print("%d" % arr[i], end=" ")`,
};
