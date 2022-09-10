import React from "react";

const quicksortInfo = () => {
  return (
    <div>
      <p>
        Quicksort is a fast sorting algorithm that works by splitting a large
        array of data into smaller sub-arrays. This implies that each iteration
        works by splitting the input into two components, sorting them, and then
        recombining them. For big datasets, the technique is highly efficient.
      </p>
      <p>
        It works by recursively sorting the sub-lists to either side of a given
        pivot and dynamically shifting elements inside the list around that
        pivot.
      </p>
      <p>
        Some of the key benefits of quick sort is that it works rapidly and
        effectively and it has the best time complexity when compared to other
        sorting algorithms.
      </p>
    </div>
  );
};

export default quicksortInfo;
