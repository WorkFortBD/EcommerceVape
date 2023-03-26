import React from "react";

export default function ProductSpinner() {
  return (
    <div class="flex justify-center items-center">
    <svg class="animate-spin h-12 w-12 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 2a8 8 0 018 8v0a8 8 0 01-9 7.75V19a1 1 0 01-2 0v-1.25A8 8 0 012 10V10a8 8 0 018-8z" clip-rule="evenodd" />
    </svg>
    <span>Loading...</span>
  </div>
  
  );
}
