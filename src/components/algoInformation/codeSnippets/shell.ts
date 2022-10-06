export const shellSnippets = {
  javascript: `
    const shellSort= ({ dataSet }) => {
      let increment = dataSet.length / 2;
      const arr = dataSet;
    
      while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
          let j = i;
          const temp = arr[i];
          setCurrentIndex(temp);
    
          while (j >= increment && arr[j - increment] > temp) {
            arr[j] = arr[j - increment];
            j = j - increment;
            setCurrentIndex(arr[i]);
            setCurrentIndex2(j);
            setDataSet([...arr]);
            await sleep(delay);
          }
          arr[j] = temp;
          setCurrentIndex(temp);
          setCurrentIndex2(i);
          setCurrentIndex3(arr[i]);
    
          await sleep(delay);
    
          setDataSet([...arr]);
        }
        if (increment == 2) {
            increment = 1;
          } else {
            // @ts-ignore
            increment = parseInt((increment * 5) / 11);
          }
        }
        setDataSet([...arr]);
        // setIsAlgorithmRunning(false);
      }
    `,
  python: `
  # Shell sort in python

  def shellSort(array, n):
  
      # Rearrange elements at each n/2, n/4, n/8, ... intervals
      interval = n // 2
      while interval > 0:
          for i in range(interval, n):
              temp = array[i]
              j = i
              while j >= interval and array[j - interval] > temp:
                  array[j] = array[j - interval]
                  j -= interval
  
              array[j] = temp
          interval //= 2
  
  
  data = [9, 8, 3, 7, 5, 6, 4, 1]
  size = len(data)
  shellSort(data, size)
  print('Sorted Array in Ascending Order:')
  print(data)`,
  java: `
  // Shell sort in Java programming

  import java.util.Arrays;
  
  // Shell sort
  class ShellSort {
  
    // Rearrange elements at each n/2, n/4, n/8, ... intervals
    void shellSort(int array[], int n) {
    for (int interval = n / 2; interval > 0; interval /= 2) {
      for (int i = interval; i < n; i += 1) {
      int temp = array[i];
      int j;
      for (j = i; j >= interval && array[j - interval] > temp; j -= interval) {
        array[j] = array[j - interval];
      }
      array[j] = temp;
      }
    }
    }
  
    // Driver code
    public static void main(String args[]) {
    int[] data = { 9, 8, 3, 7, 5, 6, 4, 1 };
    int size = data.length;
    ShellSort ss = new ShellSort();
    ss.shellSort(data, size);
    System.out.println("Sorted Array in Ascending Order: ");
    System.out.println(Arrays.toString(data));
    }
  }`,
  c: `
  // Shell Sort in C programming

  #include <stdio.h>
  
  // Shell sort
  void shellSort(int array[], int n) {
    // Rearrange elements at each n/2, n/4, n/8, ... intervals
    for (int interval = n / 2; interval > 0; interval /= 2) {
      for (int i = interval; i < n; i += 1) {
        int temp = array[i];
        int j;
        for (j = i; j >= interval && array[j - interval] > temp; j -= interval) {
          array[j] = array[j - interval];
        }
        array[j] = temp;
      }
    }
  }
  
  // Print an array
  void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i) {
      printf("%d  ", array[i]);
    }
    printf("\\n");
  }
  
  // Driver code
  int main() {
    int data[] = {9, 8, 3, 7, 5, 6, 4, 1};
    int size = sizeof(data) / sizeof(data[0]);
    shellSort(data, size);
    printf("Sorted array: \\n");
    printArray(data, size);
  }`,
  cpp: `
  // Shell Sort in C++ programming

  #include <iostream>
  using namespace std;
  
  // Shell sort
  void shellSort(int array[], int n) {
    // Rearrange elements at each n/2, n/4, n/8, ... intervals
    for (int interval = n / 2; interval > 0; interval /= 2) {
      for (int i = interval; i < n; i += 1) {
        int temp = array[i];
        int j;
        for (j = i; j >= interval && array[j - interval] > temp; j -= interval) {
          array[j] = array[j - interval];
        }
        array[j] = temp;
      }
    }
  }
  
  // Print an array
  void printArray(int array[], int size) {
    int i;
    for (i = 0; i < size; i++)
      cout << array[i] << " ";
    cout << endl;
  }
  
  // Driver code
  int main() {
    int data[] = {9, 8, 3, 7, 5, 6, 4, 1};
    int size = sizeof(data) / sizeof(data[0]);
    shellSort(data, size);
    cout << "Sorted array: \\n";
    printArray(data, size);
  }`,
  csharp: `
  using System;

  namespace ShellSortDemo {
     public class Example {
        static void shellSort(int[] arr, int n) {
           int i, j, pos, temp;
           pos = 3;
           while (pos > 0) {
              for (i = 0; i < n; i++) {
                 j = i;
                 temp = arr[i];
                 while ((j >= pos) && (arr[j - pos] > temp)) {
                    arr[j] = arr[j - pos];
                    j = j - pos;
                 }
                 arr[j] = temp;
              }
              if (pos / 2 != 0)
              pos = pos / 2;
              else if (pos == 1)
              pos = 0;
              else
              pos = 1;
           }
        }
        static void Main(string[] args) {
           int[] arr = new int[] { 56, 12, 99, 32, 1, 95, 25, 5, 100, 84 };
           int n = arr.Length;
           int i;
           Console.WriteLine("Shell Sort");
           Console.Write("Initial array is: ");
           for (i = 0; i < n; i++) {
              Console.Write(arr[i] + " ");
           }
           shellSort(arr, n);
           Console.Write("\\nSorted Array is: ");
           for (i = 0; i < n; i++) {
              Console.Write(arr[i] + " ");
           }
        }
     }
  }`,
};
