export const selectionSnippets = {
  javascript: `
    const selectionSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
    
      for (let i = 0; i < length; i++) {
        let minValue = i;
    
        for (let j = i + 1; j < length; j++) {
          if (array[j] < array[minValue]) {
            minValue = j;
          }
        }
    
        if (minValue != i) {
          // Swapping the elements
          const tmp = array[i];
          array[i] = array[minValue];
          array[minValue] = tmp;
        }
      }
    
      return array;
    }
    `,
  python: `
  # Selection sort in Python

  def selectionSort(array, size):
     
      for step in range(size):
          min_idx = step
  
          for i in range(step + 1, size):
           
              # to sort in descending order, change > to < in this line
              # select the minimum element in each loop
              if array[i] < array[min_idx]:
                  min_idx = i
           
          # put min at the correct position
          (array[step], array[min_idx]) = (array[min_idx], array[step])
  
  
  data = [-2, 45, 0, 11, -9]
  size = len(data)
  selectionSort(data, size)
  print('Sorted Array in Ascending Order:')
  print(data)`,
  java: `
  // Selection sort in Java

  import java.util.Arrays;
  
  class SelectionSort {
    void selectionSort(int array[]) {
      int size = array.length;
  
      for (int step = 0; step < size - 1; step++) {
        int min_idx = step;
  
        for (int i = step + 1; i < size; i++) {
  
          // To sort in descending order, change > to < in this line.
          // Select the minimum element in each loop.
          if (array[i] < array[min_idx]) {
            min_idx = i;
          }
        }
  
        // put min at the correct position
        int temp = array[step];
        array[step] = array[min_idx];
        array[min_idx] = temp;
      }
    }
  
    // driver code
    public static void main(String args[]) {
      int[] data = { 20, 12, 10, 15, 2 };
      SelectionSort ss = new SelectionSort();
      ss.selectionSort(data);
      System.out.println("Sorted Array in Ascending Order: ");
      System.out.println(Arrays.toString(data));
    }
  }`,
  c: `
  // Selection sort in C

  #include <stdio.h>
  
  // function to swap the the position of two elements
  void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
  }
  
  void selectionSort(int array[], int size) {
    for (int step = 0; step < size - 1; step++) {
      int min_idx = step;
      for (int i = step + 1; i < size; i++) {
  
        // To sort in descending order, change > to < in this line.
        // Select the minimum element in each loop.
        if (array[i] < array[min_idx])
          min_idx = i;
      }
  
      // put min at the correct position
      swap(&array[min_idx], &array[step]);
    }
  }
  
  // function to print an array
  void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i) {
      printf("%d  ", array[i]);
    }
    printf("\\n");
  }
  
  // driver code
  int main() {
    int data[] = {20, 12, 10, 15, 2};
    int size = sizeof(data) / sizeof(data[0]);
    selectionSort(data, size);
    printf("Sorted array in Ascending Order:\\n");
    printArray(data, size);
  }`,
  cpp: `
  // Selection sort in C++

  #include <iostream>
  using namespace std;
  
  // function to swap the the position of two elements
  void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
  }
  
  // function to print an array
  void printArray(int array[], int size) {
    for (int i = 0; i < size; i++) {
      cout << array[i] << " ";
    }
    cout << endl;
  }
  
  void selectionSort(int array[], int size) {
    for (int step = 0; step < size - 1; step++) {
      int min_idx = step;
      for (int i = step + 1; i < size; i++) {
  
        // To sort in descending order, change > to < in this line.
        // Select the minimum element in each loop.
        if (array[i] < array[min_idx])
          min_idx = i;
      }
  
      // put min at the correct position
      swap(&array[min_idx], &array[step]);
    }
  }
  
  // driver code
  int main() {
    int data[] = {20, 12, 10, 15, 2};
    int size = sizeof(data) / sizeof(data[0]);
    selectionSort(data, size);
    cout << "Sorted array in Ascending Order:\\n";
    printArray(data, size);
  }`,
};
