import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import jiggy from "../../public/assets/jiggy.jpg";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id} className="mr-10 w-full px-5 py-3">
        <div
          className="flex font-medium text-blue-900 hover:bg-blue-50 justify-between w-full text-left px-6 py-4 bg-gray-200 items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-5 text-gray-700">{item.content}</div>
        )}
      </div>
    );
  });

  return (
    // Accordion container
    <div className="flex flex-col-reverse md:flex-row max-w-6xl md-h-full mx-auto md:grid-cols-2 items-center justify-between rounded-md p-5 bg-white">
      {/* left div */}
      <div className="flex flex-col gap-10 lg:w-1/2 h-200 p-4">
        <h3 className="text-2xl lg:text-4xl text-center lg:text-left mt-5 md:text-4xl mb-5 lg:ml-5">
          Get to know more
          <br /> about JIGGY{" "}
        </h3>
        <div>{renderedItems}</div>
      </div>
      {/* right div */}
      <div className="flex justify-end lg:w-1/2 p-4">
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img
            className="object-cover hover:scale-105 transition-all ease-in-out duration-500"
            src={jiggy}
            alt="an ai photo of a guy on face mask"
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
