"use client";

const error = (error) => {
  console.log(error);
  return <div>{error.error.message}</div>;
  return <div>there was an error...</div>;
};

export default error;
