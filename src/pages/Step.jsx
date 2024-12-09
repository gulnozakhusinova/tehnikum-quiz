import { Outlet } from "react-router";

// import { Indecator } from "../components/progress-bar/Indecator"

export const Step = () => {
  return (
    <div className="container">
      <div className="wrapper">
        {/* <Indecator steps={10} activeStep={5} /> */}
        <Outlet />
       
      </div>
    </div>
  );
};