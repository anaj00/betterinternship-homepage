import { Card } from "flowbite-react";

export default function Newsletter() {
  return (
    <Card className="border w-full max-w-sm !bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-2xl p-6">
      <h5 className="text-xl font-bold">Subsribe to the newlestter</h5>
      <p className=" mt-2">Let the job find you</p>
      
      <button className="mt-6 bg-black text-white px-4 py-2 rounded-full">
        View Job
      </button>
    </Card>
  );
}
