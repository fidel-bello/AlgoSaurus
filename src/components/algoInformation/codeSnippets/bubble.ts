export const bubbleSnippets = {
  javascript: `
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
  csharp: `
  using System;
  namespace BubbleSort {
     class MySort {
        static void Main(string[] args) {
           int[] arr = { 78, 55, 45, 98, 13 };
           int temp;
           for (int j = 0; j <= arr.Length - 2; j++) {
              for (int i = 0; i <= arr.Length - 2; i++) {
                 if (arr[i] > arr[i + 1]) {
                    temp= arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = temp;
                 }
              }
           }
           Console.WriteLine("Sorted:");
           foreach (int p in arr)
              Console.Write(p + " ");
           Console.Read();
        }
     }
  }`,
  rust: `
  fn main() {
    println!("Sort numbers ascending");
    let mut numbers = [4, 65, 2, -31, 0, 99, 2, 83, 782, 1];
    println!("Before: {:?}", numbers);
    bubble_sort(&mut numbers);
    println!("After:  {:?}\\n", numbers);

    println!("Sort strings alphabetically");
    let mut strings = ["beach", "hotel", "airplane", "car", "house", "art"];
    println!("Before: {:?}", strings);
    bubble_sort(&mut strings);
    println!("After:  {:?}\\n", strings);
  }

  pub fn bubble_sort<T: Ord>(arr: &mut [T]) {
    for i in 0..arr.len() {
        for j in 0..arr.len() - 1 - i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }
  }`,
};
