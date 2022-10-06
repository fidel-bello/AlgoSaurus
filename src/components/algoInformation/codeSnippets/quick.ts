export const quickSnippets = {
  javascript: `
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
    `,
  python: `
    # Quick sort in Python

    # function to find the partition position
    def partition(array, low, high):
    
      # choose the rightmost element as pivot
      pivot = array[high]
    
      # pointer for greater element
      i = low - 1
    
      # traverse through all elements
      # compare each element with pivot
      for j in range(low, high):
        if array[j] <= pivot:
          # if element smaller than pivot is found
          # swap it with the greater element pointed by i
          i = i + 1
    
          # swapping element at i with element at j
          (array[i], array[j]) = (array[j], array[i])
    
      # swap the pivot element with the greater element specified by i
      (array[i + 1], array[high]) = (array[high], array[i + 1])
    
      # return the position from where partition is done
      return i + 1
    
    # function to perform quicksort
    def quickSort(array, low, high):
      if low < high:
    
        # find pivot element such that
        # element smaller than pivot are on the left
        # element greater than pivot are on the right
        pi = partition(array, low, high)
    
        # recursive call on the left of pivot
        quickSort(array, low, pi - 1)
    
        # recursive call on the right of pivot
        quickSort(array, pi + 1, high)
    
    
    data = [8, 7, 2, 1, 0, 9, 6]
    print("Unsorted Array")
    print(data)
    
    size = len(data)
    
    quickSort(data, 0, size - 1)
    
    print('Sorted Array in Ascending Order:')
    print(data)`,
  java: `
  // Quick sort in Java

  import java.util.Arrays;
  
  class Quicksort {
  
    // method to find the partition position
    static int partition(int array[], int low, int high) {
      
      // choose the rightmost element as pivot
      int pivot = array[high];
      
      // pointer for greater element
      int i = (low - 1);
  
      // traverse through all elements
      // compare each element with pivot
      for (int j = low; j < high; j++) {
        if (array[j] <= pivot) {
  
          // if element smaller than pivot is found
          // swap it with the greater element pointed by i
          i++;
  
          // swapping element at i with element at j
          int temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
  
      }
  
      // swap the pivot element with the greater element specified by i
      int temp = array[i + 1];
      array[i + 1] = array[high];
      array[high] = temp;
  
      // return the position from where partition is done
      return (i + 1);
    }
  
    static void quickSort(int array[], int low, int high) {
      if (low < high) {
  
        // find pivot element such that
        // elements smaller than pivot are on the left
        // elements greater than pivot are on the right
        int pi = partition(array, low, high);
        
        // recursive call on the left of pivot
        quickSort(array, low, pi - 1);
  
        // recursive call on the right of pivot
        quickSort(array, pi + 1, high);
      }
    }
  }
  
  // Main class
  class Main {
    public static void main(String args[]) {
  
      int[] data = { 8, 7, 2, 1, 0, 9, 6 };
      System.out.println("Unsorted Array");
      System.out.println(Arrays.toString(data));
  
      int size = data.length;
  
      // call quicksort() on array data
      Quicksort.quickSort(data, 0, size - 1);
  
      System.out.println("Sorted Array in Ascending Order: ");
      System.out.println(Arrays.toString(data));
    }
  }`,
  c: `
  // Quick sort in C

  #include <stdio.h>
  
  // function to swap elements
  void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
  }
  
  // function to find the partition position
  int partition(int array[], int low, int high) {
    
    // select the rightmost element as pivot
    int pivot = array[high];
    
    // pointer for greater element
    int i = (low - 1);
  
    // traverse each element of the array
    // compare them with the pivot
    for (int j = low; j < high; j++) {
      if (array[j] <= pivot) {
          
        // if element smaller than pivot is found
        // swap it with the greater element pointed by i
        i++;
        
        // swap element at i with element at j
        swap(&array[i], &array[j]);
      }
    }
  
    // swap the pivot element with the greater element at i
    swap(&array[i + 1], &array[high]);
    
    // return the partition point
    return (i + 1);
  }
  
  void quickSort(int array[], int low, int high) {
    if (low < high) {
      
      // find the pivot element such that
      // elements smaller than pivot are on left of pivot
      // elements greater than pivot are on right of pivot
      int pi = partition(array, low, high);
      
      // recursive call on the left of pivot
      quickSort(array, low, pi - 1);
      
      // recursive call on the right of pivot
      quickSort(array, pi + 1, high);
    }
  }
  
  // function to print array elements
  void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i) {
      printf("%d  ", array[i]);
    }
    printf("\\n");
  }
  
  // main function
  int main() {
    int data[] = {8, 7, 2, 1, 0, 9, 6};
    
    int n = sizeof(data) / sizeof(data[0]);
    
    printf("Unsorted Array\\n");
    printArray(data, n);
    
    // perform quicksort on data
    quickSort(data, 0, n - 1);
    
    printf("Sorted array in ascending order: \\n");
    printArray(data, n);
  }`,
  cpp: `
  // Quick sort in C++

  #include <iostream>
  using namespace std;
  
  // function to swap elements
  void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
  }
  
  // function to print the array
  void printArray(int array[], int size) {
    int i;
    for (i = 0; i < size; i++)
      cout << array[i] << " ";
    cout << endl;
  }
  
  // function to rearrange array (find the partition point)
  int partition(int array[], int low, int high) {
      
    // select the rightmost element as pivot
    int pivot = array[high];
    
    // pointer for greater element
    int i = (low - 1);
  
    // traverse each element of the array
    // compare them with the pivot
    for (int j = low; j < high; j++) {
      if (array[j] <= pivot) {
          
        // if element smaller than pivot is found
        // swap it with the greater element pointed by i
        i++;
        
        // swap element at i with element at j
        swap(&array[i], &array[j]);
      }
    }
    
    // swap pivot with the greater element at i
    swap(&array[i + 1], &array[high]);
    
    // return the partition point
    return (i + 1);
  }
  
  void quickSort(int array[], int low, int high) {
    if (low < high) {
        
      // find the pivot element such that
      // elements smaller than pivot are on left of pivot
      // elements greater than pivot are on right of pivot
      int pi = partition(array, low, high);
  
      // recursive call on the left of pivot
      quickSort(array, low, pi - 1);
  
      // recursive call on the right of pivot
      quickSort(array, pi + 1, high);
    }
  }
  
  // Driver code
  int main() {
    int data[] = {8, 7, 6, 1, 0, 9, 2};
    int n = sizeof(data) / sizeof(data[0]);
    
    cout << "Unsorted Array: \\n";
    printArray(data, n);
    
    // perform quicksort on data
    quickSort(data, 0, n - 1);
    
    cout << "Sorted array in ascending order: \\n";
    printArray(data, n);
  }`,
};
