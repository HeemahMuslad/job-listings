import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
}

const Main = ({ children }: Props) => {
  return <div className="bg-primary pt-10 ">{children}</div>;
};

export default Main;
