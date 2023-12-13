"use client"
import axios from "axios";

const ButtonRequests = () => {
  const handleAddTarget = async () => {
    try {
      const response = await axios.get("http://localhost:8080/addTarget");
      console.log("Target added successfully");
    } catch (error) {
      console.error("Failed to add target:", error);
    }
  };

  const handleRemoveTarget = async () => {
    try {
      const response = await axios.get("http://localhost:8080/removeTarget");
      console.log("Target removed successfully");
    } catch (error) {
      console.error("Failed to remove target:", error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center my-2">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1" onClick={handleAddTarget}>Add Target</button>
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1y" onClick={handleRemoveTarget}>Remove Target</button>
    </div>
  );
};

export default ButtonRequests;
