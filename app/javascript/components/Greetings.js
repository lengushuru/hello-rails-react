import React, { useEffect } from "react";
import { fetchGreetings } from "../store/greetingsSlice";
import { useDispatch, useSelector } from "react-redux";

const  Greetings = ()=> {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());

    const interval = setInterval(() => {
      dispatch(fetchGreetings());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="centre">
      {greetingsData && <h1>{greetingsData.message}</h1>}
    </div>
  );
}

export default Greetings;
