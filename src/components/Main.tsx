import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
  filter: ReactNode;
  onFilterActive:boolean
  
}

const Main = ({ children, filter ,onFilterActive}: Props) => {
  return (
    <>
      <div className={`bg-primary  ${onFilterActive === true? "p-0" :"py-10"}`}   >
        <div className="">{filter}</div>
        <div className=" ">{children}</div>
      </div>
    </>
  );
};

export default Main;
