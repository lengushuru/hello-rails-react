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
      <h1>My greeting</h1>
      {greetingsData && <h2>{greetingsData.message}</h2>}
    </div>
  );
}

export default Greetings;
