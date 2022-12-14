export const insertionSnippets = {
  javascript: `
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
  python: `
    # Insertion sort in Python


    def insertionSort(array):
    
        for step in range(1, len(array)):
            key = array[step]
            j = step - 1
                 
            while j >= 0 and key < array[j]:
                array[j + 1] = array[j]
                j = j - 1
            
            # Place key at after the element just smaller than it.
            array[j + 1] = key
    
    
    data = [9, 5, 1, 4, 3]
    insertionSort(data)
    print('Sorted Array in Ascending Order:')
    print(data)`,
  java: `
  // Insertion sort in Java

    import java.util.Arrays;
    
    class InsertionSort {
    
      void insertionSort(int array[]) {
        int size = array.length;
    
        for (int step = 1; step < size; step++) {
          int key = array[step];
          int j = step - 1;
    
          // Compare key with each element on the left of it until an element smaller than
          // it is found.
          // For descending order, change key<array[j] to key>array[j].
          while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            --j;
          }
    
          // Place key at after the element just smaller than it.
          array[j + 1] = key;
        }
      }
    
      // Driver code
      public static void main(String args[]) {
        int[] data = { 9, 5, 1, 4, 3 };
        InsertionSort is = new InsertionSort();
        is.insertionSort(data);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
      }
    }`,
  c: `
    // Insertion sort in C

    #include <stdio.h>
    
    // Function to print an array
    void printArray(int array[], int size) {
      for (int i = 0; i < size; i++) {
        printf("%d ", array[i]);
      }
      printf("\\n");
    }
    
    void insertionSort(int array[], int size) {
      for (int step = 1; step < size; step++) {
        int key = array[step];
        int j = step - 1;
    
        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (key < array[j] && j >= 0) {
          array[j + 1] = array[j];
          --j;
        }
        array[j + 1] = key;
      }
    }
    
    // Driver code
    int main() {
      int data[] = {9, 5, 1, 4, 3};
      int size = sizeof(data) / sizeof(data[0]);
      insertionSort(data, size);
      printf("Sorted array in ascending order:\\n");
      printArray(data, size);
    }`,
  cpp: `
    // Insertion sort in C++

    #include <iostream>
    using namespace std;
    
    // Function to print an array
    void printArray(int array[], int size) {
      for (int i = 0; i < size; i++) {
        cout << array[i] << " ";
      }
      cout << endl;
    }
    
    void insertionSort(int array[], int size) {
      for (int step = 1; step < size; step++) {
        int key = array[step];
        int j = step - 1;
    
        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (key < array[j] && j >= 0) {
          array[j + 1] = array[j];
          --j;
        }
        array[j + 1] = key;
      }
    }
    
    // Driver code
    int main() {
      int data[] = {9, 5, 1, 4, 3};
      int size = sizeof(data) / sizeof(data[0]);
      insertionSort(data, size);
      cout << "Sorted array in ascending order:\\n";
      printArray(data, size);
    }
  `,
  csharp: `
  using System;
  namespace InsertionSortDemo {
     class Example {
        static void Main(string[] args) {
           int[] arr = new int[10] { 23, 9, 85, 12, 99, 34, 60, 15, 100, 1 };
           int n = 10, i, j, val, flag;
           Console.WriteLine("Insertion Sort");
           Console.Write("Initial array is: ");
           for (i = 0; i < n; i++) {
              Console.Write(arr[i] + " ");
           }
           for (i = 1; i < n; i++) {
              val = arr[i];
              flag = 0;
              for (j = i - 1; j >= 0 && flag != 1; ) {
                 if (val < arr[j]) {
                    arr[j + 1] = arr[j];
                    j--;
                    arr[j + 1] = val;
                 }
                 else flag = 1;
              }
           }
           Console.Write("\\nSorted Array is: ");
           for (i = 0; i < n; i++) {
              Console.Write(arr[i] + " ");
           }
        }
     }
  }`,
  rust: `
  pub fn insertion_sort(arr: &mut [i32]) {
    for i in 1..arr.len() {
        let mut j = i;
        while j > 0 && arr[j - 1] > arr[j] {
            arr.swap(j - 1, j);
            j -= 1;
        }
    }
  }
  
  /// Binary insertion sort.
  /// Binary insertion sort is a insertion sort variant that utilizes binary
  /// search to reduce comparisons in a normal insertion sort.

  pub fn binary_insertion_sort(arr: &mut [i32]) {
    for i in 1..arr.len() {
        let val = arr[i];
        let mut j = i;
        let pos = arr[..i].binary_search(&val).unwrap_or_else(|pos| pos);
        // Swap all elements until specific position.
        while j > pos {
            arr.swap(j - 1, j);
            j -= 1;
        }
    }
  }`,
};
