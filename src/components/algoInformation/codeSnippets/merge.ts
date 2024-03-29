export const mergeSnippets = {
  javascript: `
    const mergeSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
      const temp = [];
      const front = 0;
      const back = length - 1;
    
      const divide = (array:, temp, front, end) => {
        if (front < end) {
          const mid = Math.floor((end + front) / 2);
           divide(array, temp, front, mid);
           divide(array, temp, mid + 1, end);
           merge(array, temp, front, mid, end);
        }
      };
      
      const merge =  (
        array,
        temp,
        start,
        mid,
        end
      ) => {
        const sorted = [];
        let i = start;
        let j = mid + 1;
    
        while (i <= mid && j <= end) {
          if (array[i] <= array[j]) {
            sorted.push(array[i++]);
          } else {
            sorted.push(array[j++]);
          }
        }
    
        while (i <= mid) {
          sorted.push(array[i++]);
        }
    
        while (j <= end) {
          sorted.push(array[j++]);
        }
    
        const indexes = [];
        for (let i = start; i <= end; ++i) {
          indexes.push(i);
        }
    
        for (let i = start; i <= end; ++i) {
          array[i] = sorted[i - start];
          temp.push([i, array[i], indexes]);
        }
      };
    
      divide(array, temp, front, back);
    
      return array;
    };
    `,
  python: `
    # MergeSort in Python


    def mergeSort(array):
        if len(array) > 1:
    
            #  r is the point where the array is divided into two sub arrays
            r = len(array)//2
            L = array[:r]
            M = array[r:]
    
            # Sort the two halves
            mergeSort(L)
            mergeSort(M)
    
            i = j = k = 0
    
            # Until we reach either end of either L or M, pick larger among
            # elements L and M and place them in the correct position at A[p..r]
            while i < len(L) and j < len(M):
                if L[i] < M[j]:
                    array[k] = L[i]
                    i += 1
                else:
                    array[k] = M[j]
                    j += 1
                k += 1
    
            # When we run out of elements in either L or M,
            # pick up the remaining elements and put in A[p..r]
            while i < len(L):
                array[k] = L[i]
                i += 1
                k += 1
    
            while j < len(M):
                array[k] = M[j]
                j += 1
                k += 1
    
    
    # Print the array
    def printList(array):
        for i in range(len(array)):
            print(array[i], end=" ")
        print()
    
    
    # Driver program
    if __name__ == '__main__':
        array = [6, 5, 12, 10, 9, 1]
    
        mergeSort(array)
    
        print("Sorted array is: ")
        printList(array)`,
  java: `
  // Merge sort in Java

  class MergeSort {
  
    // Merge two sub arrays L and M into arr
    void merge(int arr[], int p, int q, int r) {
  
      // Create L ← A[p..q] and M ← A[q+1..r]
      int n1 = q - p + 1;
      int n2 = r - q;
  
      int L[] = new int[n1];
      int M[] = new int[n2];
  
      for (int i = 0; i < n1; i++)
        L[i] = arr[p + i];
      for (int j = 0; j < n2; j++)
        M[j] = arr[q + 1 + j];
  
      // Maintain current index of sub-arrays and main array
      int i, j, k;
      i = 0;
      j = 0;
      k = p;
  
      // Until we reach either end of either L or M, pick larger among
      // elements L and M and place them in the correct position at A[p..r]
      while (i < n1 && j < n2) {
        if (L[i] <= M[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = M[j];
          j++;
        }
        k++;
      }
  
      // When we run out of elements in either L or M,
      // pick up the remaining elements and put in A[p..r]
      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }
  
      while (j < n2) {
        arr[k] = M[j];
        j++;
        k++;
      }
    }
  
    // Divide the array into two sub arrays, sort them and merge them
    void mergeSort(int arr[], int l, int r) {
      if (l < r) {
  
        // m is the point where the array is divided into two sub arrays
        int m = (l + r) / 2;
  
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
  
        // Merge the sorted sub arrays
        merge(arr, l, m, r);
      }
    }
  
    // Print the array
    static void printArray(int arr[]) {
      int n = arr.length;
      for (int i = 0; i < n; ++i)
        System.out.print(arr[i] + " ");
      System.out.println();
    }
  
    // Driver program
    public static void main(String args[]) {
      int arr[] = { 6, 5, 12, 10, 9, 1 };
  
      MergeSort ob = new MergeSort();
      ob.mergeSort(arr, 0, arr.length - 1);
  
      System.out.println("Sorted array:");
      printArray(arr);
    }
  }`,
  c: `
  // Merge sort in C

  #include <stdio.h>
  
  // Merge two sub arrays L and M into arr
  void merge(int arr[], int p, int q, int r) {
  
    // Create L ← A[p..q] and M ← A[q+1..r]
    int n1 = q - p + 1;
    int n2 = r - q;
  
    int L[n1], M[n2];
  
    for (int i = 0; i < n1; i++)
      L[i] = arr[p + i];
    for (int j = 0; j < n2; j++)
      M[j] = arr[q + 1 + j];
  
    // Maintain current index of sub-arrays and main array
    int i, j, k;
    i = 0;
    j = 0;
    k = p;
  
    // Until we reach either end of either L or M, pick larger among
    // elements L and M and place them in the correct position at A[p..r]
    while (i < n1 && j < n2) {
      if (L[i] <= M[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = M[j];
        j++;
      }
      k++;
    }
  
    // When we run out of elements in either L or M,
    // pick up the remaining elements and put in A[p..r]
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = M[j];
      j++;
      k++;
    }
  }
  
  // Divide the array into two sub arrays, sort them and merge them
  void mergeSort(int arr[], int l, int r) {
    if (l < r) {
  
      // m is the point where the array is divided into two sub arrays
      int m = l + (r - l) / 2;
  
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
  
      // Merge the sorted sub arrays
      merge(arr, l, m, r);
    }
  }
  
  // Print the array
  void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
      printf("%d ", arr[i]);
    printf("\\n");
  }
  
  // Driver program
  int main() {
    int arr[] = {6, 5, 12, 10, 9, 1};
    int size = sizeof(arr) / sizeof(arr[0]);
  
    mergeSort(arr, 0, size - 1);
  
    printf("Sorted array: \\n");
    printArray(arr, size);
  }`,
  cpp: `
  // Merge sort in C++

  #include <iostream>
  using namespace std;
  
  // Merge two sub arrays L and M into arr
  void merge(int arr[], int p, int q, int r) {
    
    // Create L ← A[p..q] and M ← A[q+1..r]
    int n1 = q - p + 1;
    int n2 = r - q;
  
    int L[n1], M[n2];
  
    for (int i = 0; i < n1; i++)
      L[i] = arr[p + i];
    for (int j = 0; j < n2; j++)
      M[j] = arr[q + 1 + j];
  
    // Maintain current index of sub-arrays and main array
    int i, j, k;
    i = 0;
    j = 0;
    k = p;
  
    // Until we reach either end of either L or M, pick larger among
    // elements L and M and place them in the correct position at A[p..r]
    while (i < n1 && j < n2) {
      if (L[i] <= M[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = M[j];
        j++;
      }
      k++;
    }
  
    // When we run out of elements in either L or M,
    // pick up the remaining elements and put in A[p..r]
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = M[j];
      j++;
      k++;
    }
  }
  
  // Divide the array into two sub arrays, sort them and merge them
  void mergeSort(int arr[], int l, int r) {
    if (l < r) {
      // m is the point where the array is divided into two sub arrays
      int m = l + (r - l) / 2;
  
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
  
      // Merge the sorted sub arrays
      merge(arr, l, m, r);
    }
  }
  
  // Print the array
  void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
      cout << arr[i] << " ";
    cout << endl;
  }
  
  // Driver program
  int main() {
    int arr[] = {6, 5, 12, 10, 9, 1};
    int size = sizeof(arr) / sizeof(arr[0]);
  
    mergeSort(arr, 0, size - 1);
  
    cout << "Sorted array: \\n";
    printArray(arr, size);
    return 0;
  }`,
  csharp: `
  // C# program for Merge Sort
  
  using System;
  class MergeSort {
  
    // Merges two sub arrays of []arr.
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    void merge(int[] arr, int l, int m, int r)
    {
      // Find sizes of two
      // sub arrays to be merged
      int n1 = m - l + 1;
      int n2 = r - m;
  
      // Create temp arrays
      int[] L = new int[n1];
      int[] R = new int[n2];
      int i, j;
  
      // Copy data to temp arrays
      for (i = 0; i < n1; ++i)
        L[i] = arr[l + i];
      for (j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];
  
      // Merge the temp arrays
  
      // Initial indexes of first
      // and second sub arrays
      i = 0;
      j = 0;
  
      // Initial index of merged
      // subarray array
      int k = l;
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        }
        else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }
  
      // Copy remaining elements
      // of L[] if any
      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }
  
      // Copy remaining elements
      // of R[] if any
      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    }
  
    // Main function that
    // sorts arr[l..r] using
    // merge()
    void sort(int[] arr, int l, int r)
    {
      if (l < r) {
        // Find the middle
        // point
        int m = l + (r - l) / 2;
  
        // Sort first and
        // second halves
        sort(arr, l, m);
        sort(arr, m + 1, r);
  
        // Merge the sorted halves
        merge(arr, l, m, r);
      }
    }
  
    // A utility function to
    // print array of size n */
    static void printArray(int[] arr)
    {
      int n = arr.Length;
      for (int i = 0; i < n; ++i)
        Console.Write(arr[i] + " ");
      Console.WriteLine();
    }
  
    // Driver code
    public static void Main(String[] args)
    {
      int[] arr = { 12, 11, 13, 5, 6, 7 };
      Console.WriteLine("Given Array");
      printArray(arr);
      MergeSort ob = new MergeSort();
      ob.sort(arr, 0, arr.Length - 1);
      Console.WriteLine("\\nSorted array");
      printArray(arr);
    }
  }
  `,
  rust: `
  fn merge<T: Copy + PartialOrd>(x1: &[T], x2: &[T], y: &mut [T]) {
    assert_eq!(x1.len() + x2.len(), y.len());
    let mut i = 0;
    let mut j = 0;
    let mut k = 0;
    while i < x1.len() && j < x2.len() {
        if x1[i] < x2[j] {
            y[k] = x1[i];
            k += 1;
            i += 1;
        } else {
            y[k] = x2[j];
            k += 1;
            j += 1;
        }
    }
    if i < x1.len() {
        y[k..].copy_from_slice(&x1[i..]);
    }
    if j < x2.len() {
        y[k..].copy_from_slice(&x2[j..]);
    }
  }

  fn merge_sort<T: Copy + Ord>(x: &mut [T]) {
	  let n = x.len();
	  let m = n / 2;
 
	  if n <= 1 {
		  return;
	  }
 
	  merge_sort(&mut x[0..m]);
  	merge_sort(&mut x[m..n]);
 
	  let mut y: Vec<T> = x.to_vec();
 
	  merge(&x[0..m], &x[m..n], &mut y[..]);
 
	  x.copy_from_slice(&y);
  }

  fn main() {
    println!("Sort numbers ascending");
    let mut numbers = [4, 65, 2, -31, 0, 99, 2, 83, 782, 1];
    println!("Before: {:?}", numbers);
    merge_sort(&mut numbers);
    println!("After:  {:?}\n", numbers);

    println!("Sort strings alphabetically");
    let mut strings = ["beach", "hotel", "airplane", "car", "house", "art"];
    println!("Before: {:?}", strings);
    merge_sort(&mut strings);
    println!("After:  {:?}\n", strings);
  }`,
};
