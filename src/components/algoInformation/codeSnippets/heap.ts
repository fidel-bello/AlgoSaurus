export const heapSnippets = {
  javascript: `
    const heapSort = ({ dataSet }) => {
      const length = dataSet.length;
      const array = dataSet;
      const moves = [];
    
      const heapify = (temp, array, length, index) => {
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
    
        if (left < length && array[left] > array[largest]) {
          largest = left;
        }
    
        if (right < length && array[right] > array[largest]) {
          largest = right;
        }
    
        if (largest !== index) {
          temp.push([index, largest]);
          swapElements(array, index, largest);
    
          heapify(temp, array, length, largest);
        }
      };
    
      for (let i = Math.ceil(length / 2) - 1; i >= 0; --i) {
        heapify(moves, array, length, i);
      }
    
      for (let index = length - 1; index >= 0; --index) {
        moves.push([index, 0]);
        swapElements(array, index, 0);
        heapify(moves, array, index, 0);
      }
    
      return moves;
    };
    `,
  python: `
    # Heap Sort in python


    def heapify(arr, n, i):
        # Find largest among root and children
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2
    
        if l < n and arr[i] < arr[l]:
            largest = l
    
        if r < n and arr[largest] < arr[r]:
            largest = r
    
        # If root is not largest, swap with largest and continue heapifying
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    
    def heapSort(arr):
        n = len(arr)
    
        # Build max heap
        for i in range(n//2, -1, -1):
            heapify(arr, n, i)
    
        for i in range(n-1, 0, -1):
            # Swap
            arr[i], arr[0] = arr[0], arr[i]
    
            # Heapify root element
            heapify(arr, i, 0)
    
    
    arr = [1, 12, 9, 5, 6, 10]
    heapSort(arr)
    n = len(arr)
    print("Sorted array is")
    for i in range(n):
        print("%d " % arr[i], end='')
    `,
  java: `
  // Heap Sort in Java
  
    public class HeapSort {
    
      public void sort(int arr[]) {
        int n = arr.length;
    
        // Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
          heapify(arr, n, i);
        }
    
        // Heap sort
        for (int i = n - 1; i >= 0; i--) {
          int temp = arr[0];
          arr[0] = arr[i];
          arr[i] = temp;
    
          // Heapify root element
          heapify(arr, i, 0);
        }
      }
    
      void heapify(int arr[], int n, int i) {
        // Find largest among root, left child and right child
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;
    
        if (l < n && arr[l] > arr[largest])
          largest = l;
    
        if (r < n && arr[r] > arr[largest])
          largest = r;
    
        // Swap and continue heapifying if root is not largest
        if (largest != i) {
          int swap = arr[i];
          arr[i] = arr[largest];
          arr[largest] = swap;
    
          heapify(arr, n, largest);
        }
      }
    
      // Function to print an array
      static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
          System.out.print(arr[i] + " ");
        System.out.println();
      }
    
      // Driver code
      public static void main(String args[]) {
        int arr[] = { 1, 12, 9, 5, 6, 10 };
    
        HeapSort hs = new HeapSort();
        hs.sort(arr);
    
        System.out.println("Sorted array is");
        printArray(arr);
      }
    }`,
  c: `
    // Heap Sort in C
  
    #include <stdio.h>
    
    // Function to swap the the position of two elements
    void swap(int *a, int *b) {
      int temp = *a;
      *a = *b;
      *b = temp;
    }
    
    void heapify(int arr[], int n, int i) {
      // Find largest among root, left child and right child
      int largest = i;
      int left = 2 * i + 1;
      int right = 2 * i + 2;
    
      if (left < n && arr[left] > arr[largest])
        largest = left;
    
      if (right < n && arr[right] > arr[largest])
        largest = right;
    
      // Swap and continue heapifying if root is not largest
      if (largest != i) {
        swap(&arr[i], &arr[largest]);
        heapify(arr, n, largest);
      }
    }
    
    // Main function to do heap sort
    void heapSort(int arr[], int n) {
      // Build max heap
      for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    
      // Heap sort
      for (int i = n - 1; i >= 0; i--) {
        swap(&arr[0], &arr[i]);
    
        // Heapify root element to get highest element at root again
        heapify(arr, i, 0);
      }
    }
    
    // Print an array
    void printArray(int arr[], int n) {
      for (int i = 0; i < n; ++i)
        printf("%d ", arr[i]);
      printf("\\n");
    }
    
    // Driver code
    int main() {
      int arr[] = {1, 12, 9, 5, 6, 10};
      int n = sizeof(arr) / sizeof(arr[0]);
    
      heapSort(arr, n);
    
      printf("Sorted array is \\n");
      printArray(arr, n);
    }`,
  cpp: `
    // Heap Sort in C++
  
    #include <iostream>
    using namespace std;
    
    void heapify(int arr[], int n, int i) {
      // Find largest among root, left child and right child
      int largest = i;
      int left = 2 * i + 1;
      int right = 2 * i + 2;
    
      if (left < n && arr[left] > arr[largest])
        largest = left;
    
      if (right < n && arr[right] > arr[largest])
        largest = right;
    
      // Swap and continue heapifying if root is not largest
      if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
      }
    }
    
    // main function to do heap sort
    void heapSort(int arr[], int n) {
      // Build max heap
      for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    
      // Heap sort
      for (int i = n - 1; i >= 0; i--) {
        swap(arr[0], arr[i]);
    
        // Heapify root element to get highest element at root again
        heapify(arr, i, 0);
      }
    }
    
    // Print an array
    void printArray(int arr[], int n) {
      for (int i = 0; i < n; ++i)
        cout << arr[i] << " ";
      cout << "\\n";
    }
    
    // Driver code
    int main() {
      int arr[] = {1, 12, 9, 5, 6, 10};
      int n = sizeof(arr) / sizeof(arr[0]);
      heapSort(arr, n);
    
      cout << "Sorted array is \\n";
      printArray(arr, n);
    }`,
  csharp: `
  // C# program for implementation of Heap Sort

  using System;
  
  public class HeapSort {
    public void sort(int[] arr)
    {
      int N = arr.Length;
  
      // Build heap (rearrange array)
      for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
  
      // One by one extract an element from heap
      for (int i = N - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
  
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
      }
    }
  
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    void heapify(int[] arr, int N, int i)
    {
      int largest = i; // Initialize largest as root
      int l = 2 * i + 1; // left = 2*i + 1
      int r = 2 * i + 2; // right = 2*i + 2
  
      // If left child is larger than root
      if (l < N && arr[l] > arr[largest])
        largest = l;
  
      // If right child is larger than largest so far
      if (r < N && arr[r] > arr[largest])
        largest = r;
  
      // If largest is not root
      if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
  
        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
      }
    }
  
    /* A utility function to print array of size n */
    static void printArray(int[] arr)
    {
      int N = arr.Length;
      for (int i = 0; i < N; ++i)
        Console.Write(arr[i] + " ");
      Console.Read();
    }
  
    // Driver's code
    public static void Main()
    {
      int[] arr = { 12, 11, 13, 5, 6, 7 };
      int N = arr.Length;
  
      // Function call
      HeapSort ob = new HeapSort();
      ob.sort(arr);
  
      Console.WriteLine("Sorted array is");
      printArray(arr);
    }
  }
  `,
  rust: `
  pub fn heap_sort<T: Ord>(arr: &mut [T]) {
    if arr.len() <= 1 {
        return;
    }

    let last_parent = (arr.len() - 2) / 2;
    for i in (0..=last_parent).rev() {
        move_down(arr, i);
    }

    for end in (1..arr.len()).rev() {
        arr.swap(0, end);
        move_down(&mut arr[..end], 0);
    }
  }

  fn move_down<T: Ord>(arr: &mut [T], mut root: usize) {
    let last = arr.len() - 1;
    loop {
        let left = 2 * root + 1;
        if left > last {
            break;
        }
        let right = left + 1;
        let child = if right <= last && arr[right] > arr[left] {
            right
        } else {
            left
        };

        if arr[child] > arr[root] {
            arr.swap(root, child);
        }
        root = child;
    }
  }

  fn main() {
    println!("Sort numbers ascending");
    let mut numbers = [4, 65, 2, -31, 0, 99, 2, 83, 782, 1];
    println!("Before: {:?}", numbers);
    heap_sort(&mut numbers);
    println!("After:  {:?}\\n", numbers);

    println!("Sort strings alphabetically");
    let mut strings = ["beach", "hotel", "airplane", "car", "house", "art"];
    println!("Before: {:?}", strings);
    heap_sort(&mut strings);
    println!("After:  {:?}\\n", strings);
  }`,
};
