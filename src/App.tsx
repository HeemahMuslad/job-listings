import Main from "./components/Main";
import jsonData from "./data.json";
import { useState } from "react";
const App = () => {
  const [onFilterActive, setOnFilterActive] = useState(false);
  const [selectedTabs, setSelectedTabs] = useState<string[]>([]);
  let onClickTab = (value: any) => {
    setOnFilterActive(true);
    if (!selectedTabs.includes(value)) {
      setSelectedTabs((prevTabs) => [...prevTabs, value]);
    }
  };

  const onClickRemove = (index: number) => {
    setSelectedTabs((prevTabs) => {
      const newTabs = [...prevTabs];
      newTabs.splice(index, 1);
      return newTabs;
    });
  };
  const onClearFilters = () => {
    setOnFilterActive(false);
    setSelectedTabs([]);
  };

  const filteredData = jsonData.filter((job) =>
    selectedTabs.every((tab) =>
      [job.role, job.level, ...job.languages, ...job.tools].includes(tab)
    )
  );

  return (
    <>
      <div className="header h-20 w-full "></div>
      <Main
        onFilterActive={onFilterActive}
        filter={
          onFilterActive && (
            <div className="w-max m-auto p-5 bg-white shadow-lg rounded flex items-center relative   flex-wrap -top-8 gap-3 ">
              {selectedTabs.map((tab, index) => (
                <div
                  key={tab}
                  className="bg-light text-dark font-semibold  rounded rounded-r-none flex pl-2 items-center gap-2 py-0"
                >
                  <p>{tab}</p>
                  <img
                    onClick={() => onClickRemove(index)}
                    className="bg-dark hover:bg-secondary cursor-pointer  rounded-r m-0 p-1"
                    src="/images/icon-remove.svg"
                    alt=""
                  />
                </div>
              ))}
              <p
                onClick={onClearFilters}
                className=" text-dark font-semibold  cursor-pointer hover:bg-secondary hover:text-light p-2 rounded"
              >
                Clear
              </p>
            </div>
          )
        }
        children={filteredData.map((job) => (
          <div
            key={job.id}
            className={`w-max mx-auto p-5 bg-white mb-5 shadow-lg rounded flex justify-between items-center md:flex-col md:items-start  md:gap-7 sm:mb-10 ${
              job.featured ? "  border-l-4 border-dark" : ""
            }`}
          >
            <div className="flex relative gap-5 items-center sm:flex-col sm:items-start">
              <img
                className="w-20 sm:w-10 sm:absolute sm:-top-10 "
                src={job.logo}
                alt=""
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-3 md:flex-wrap sm:mt-3">
                  <p className="text-dark font-semibold">{job.company}</p>
                  {job.new && (
                    <p className="bg-dark px-2 py-1 rounded-full  text-xs  font-semibold text-white">
                      NEW!
                    </p>
                  )}
                  {job.featured && (
                    <p className="bg-secondary px-2 py-1 rounded-full  text-xs  font-semibold text-white">
                      FEATURED
                    </p>
                  )}
                </div>
                <h1 className="font-bold text-secondary">{job.position}</h1>
                <div className="flex gap-4 items-center text-xs text-cool">
                  <p>{job.postedAt}</p>
                  <div className="rounded w-1 h-1 bg-cool"></div>
                  <p>{job.contract}</p>
                  <div className="rounded w-1 h-1 bg-cool"></div>
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 md:flex-wrap sm:border-t-2 sm:pt-7 ">
              <p
                className="bg-light text-dark font-semibold p-1 rounded cursor-pointer hover:bg-dark hover:text-light"
                onClick={() => onClickTab(job.role)}
              >
                {job.role}
              </p>
              <p
                className="bg-light text-dark font-semibold p-1 rounded cursor-pointer hover:bg-dark hover:text-light"
                onClick={() => onClickTab(job.level)}
              >
                {job.level}
              </p>
              {job.languages.map((language) => (
                <p
                  key={language}
                  className="bg-light text-dark font-semibold p-1 rounded cursor-pointer hover:bg-dark hover:text-light"
                  onClick={() => onClickTab(language)}
                >
                  {language}
                </p>
              ))}
              {job.tools.map((tool) => (
                <p
                  key={tool}
                  className="bg-light text-dark font-semibold p-1 rounded cursor-pointer hover:bg-dark hover:text-light"
                  onClick={() => onClickTab(tool)}
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
      ></Main>
    </>
  );
};

export default App;
