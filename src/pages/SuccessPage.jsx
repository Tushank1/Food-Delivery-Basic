import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

function Success() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4  text-center">
            Order Successfull !!!
          </h1>
          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
}

export default Success;
