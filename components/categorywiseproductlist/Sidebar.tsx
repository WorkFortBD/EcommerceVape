import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Sidebar = (value) => {
  console.log('value', value.value)
  const [isOpen, setIsOpen] = useState(value.value);
  
  // useEffect(() => {
  //   setIsOpen(value.value)
  // }, [value.value]);
  console.log('isOpen', isOpen)
  return (
    <div className="flex">
      <Transition
        show={isOpen}
        enter="transform transition duration-500 ease-in-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition duration-500 ease-in-out"
        leaveFrom="translate-x-30"
        leaveTo="-translate-x-full"
        className="fixed top-0 right-0 h-screen w-1/2 z-40"
      >
        <div className="h-full bg-blue-500">
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          Sidebar
        </div>
      </Transition>
    </div>
  );
};

export default Sidebar;
