import Main from "./components/Main";
import jsonData from "./data.json";
const App = () => {
  return (
    <>
      <div className="header h-20 w-full "></div>
      <Main
        children={jsonData.map((job) => (
          <div
            key={job.id}
            className={`w-max mx-auto p-5 bg-white mb-5 shadow-lg rounded flex justify-between items-center md:flex-col md:items-start  md:gap-7 sm:mb-10 ${
              job.featured ? "  border-l-4 border-dark" : ""
            }`}
          >
            <div className="flex relative gap-5 items-center sm:flex-col sm:items-start">
                <img className="w-20 sm:w-10 sm:absolute sm:-top-10 "  src={job.logo} alt="" />
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
              <p className="bg-light text-dark font-semibold p-1 rounded">
                {job.role}
              </p>
              <p className="bg-light text-dark font-semibold p-1 rounded">
                {job.level}
              </p>
              {job.languages.map((language) => (
                <p className="bg-light text-dark font-semibold p-1 rounded">
                  {language}
                </p>
              ))}
              {job.tools.map((tool) => (
                <p className="bg-light text-dark font-semibold p-1 rounded">
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
