import { useEffect, useState, useRef } from "react";
import {
  GoChevronDown,
  GoChevronLeft,
  GoTrashcan,
  GoPencil,
} from "react-icons/go";

function Accordion({ items, sharedData }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    const savedImage = localStorage.getItem("stored-image");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]; // get the selected image of index 0
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setImage(base64);
      localStorage.setItem("stored-image", base64);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    localStorage.removeItem("stored-image");
  };

  const handleImageEdit = () => {
    return fileInputRef.current.click();
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
    <div className="flex flex-col-reverse md:flex-row max-w-6xl md-h-full mx-auto md:grid-cols-2 lg:w-full items-center justify-between rounded-md p-5 bg-white">
      {/* left div */}
      <div className="flex flex-col gap-10 lg:w-1/2 h-200 p-4">
        <h3 className="text-2xl lg:text-4xl text-center lg:text-left mt-5 md:text-4xl mb-5 lg:ml-5">
          Get to know more
          <br /> about {sharedData}{" "}
        </h3>
        <div>{renderedItems}</div>
      </div>
      {/* right div */}
      <div className="flex justify-center lg:w-1/2 bg-gray-500 rounded-xl relative w-full h-120 lg:h-200">
        <div className="flex flex-col items-center justify-center relative rounded-xl shadow-lg  overflow-hidden w-[100%] h-[100%]">
          <div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden w-full h-full"
            />
          </div>
          {/* upload button */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            Upload Image
          </button>
          <div className="absolute z-20">
            {image && (
              <img
                src={image}
                alt="Uploads"
                className="hover:scale-105 transition-all ease-in-out duration-500 z-10 w-full h-full"
              />
            )}
          </div>
        </div>

        {/* edit and delete btn */}
        <div className="flex gap-3 absolute z-20 right-0 p-3">
          <button
            onClick={handleImageEdit}
            className="px-4 py-2 bg-blue-600 text-white  rounded cursor-pointer"
          >
            <GoPencil className="" />
          </button>
          <button
            onClick={handleImageDelete}
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            <GoTrashcan />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
