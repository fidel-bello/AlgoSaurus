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
  # Bubble sort in Python

  def bubbleSort(array):
      
    # loop to access each array element
    for i in range(len(array)):
  
      # loop to compare array elements
      for j in range(0, len(array) - i - 1):
  
        # compare two adjacent elements
        # change > to < to sort in descending order
        if array[j] > array[j + 1]:
  
          # swapping elements if elements
          # are not in the intended order
          temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
  
  
  data = [-2, 45, 0, 11, -9]
  
  bubbleSort(data)
  
  print('Sorted Array in Ascending Order:')
  print(data)`,

  java: `
  // Bubble sort in Java

  import java.util.Arrays;
  
  class Main {
  
    // perform the bubble sort
    static void bubbleSort(int array[]) {
      int size = array.length;
      
      // loop to access each array element
      for (int i = 0; i < size - 1; i++)
      
        // loop to compare array elements
        for (int j = 0; j < size - i - 1; j++)
  
          // compare two adjacent elements
          // change > to < to sort in descending order
          if (array[j] > array[j + 1]) {
  
            // swapping occurs if elements
            // are not in the intended order
            int temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
    }
  
    public static void main(String args[]) {
        
      int[] data = { -2, 45, 0, 11, -9 };
      
      // call method using class name
      Main.bubbleSort(data);
      
      System.out.println("Sorted Array in Ascending Order:");
      System.out.println(Arrays.toString(data));
    }
  }`,
  c: `
  // Bubble sort in C

  #include <stdio.h>
  
  // perform the bubble sort
  void bubbleSort(int array[], int size) {
  
    // loop to access each array element
    for (int step = 0; step < size - 1; ++step) {
        
      // loop to compare array elements
      for (int i = 0; i < size - step - 1; ++i) {
        
        // compare two adjacent elements
        // change > to < to sort in descending order
        if (array[i] > array[i + 1]) {
          
          // swapping occurs if elements
          // are not in the intended order
          int temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
  }
  
  // print array
  void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i) {
      printf("%d  ", array[i]);
    }
    printf("\\n");
  }
  
  int main() {
    int data[] = {-2, 45, 0, 11, -9};
    
    // find the array's length
    int size = sizeof(data) / sizeof(data[0]);
  
    bubbleSort(data, size);
    
    printf("Sorted Array in Ascending Order:\\n");
    printArray(data, size);
  }`,
  cpp: `
  // Bubble sort in C++

  #include <iostream>
  using namespace std;
  
  // perform bubble sort
  void bubbleSort(int array[], int size) {
  
    // loop to access each array element
    for (int step = 0; step < size; ++step) {
        
      // loop to compare array elements
      for (int i = 0; i < size - step; ++i) {
  
        // compare two adjacent elements
        // change > to < to sort in descending order
        if (array[i] > array[i + 1]) {
  
          // swapping elements if elements
          // are not in the intended order
          int temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
  }
  
  // print array
  void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i) {
      cout << "  " << array[i];
    }
    cout << "\\n";
  }
  
  int main() {
    int data[] = {-2, 45, 0, 11, -9};
    
    // find array's length
    int size = sizeof(data) / sizeof(data[0]);
    
    bubbleSort(data, size);
    
    cout << "Sorted Array in Ascending Order:\\n";  
    printArray(data, size);
  }`,
};
