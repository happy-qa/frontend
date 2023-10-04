import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import news from "/src/assets/jsonfiles/news.json";

const MainPage = () => {
  const nav = useNavigate()
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Toolbar />
      <div className="flex items-center justify-start w-80vw border-b-2 border-red-500">
        <p className="text-white text-5xl m-3 mt-1"> NEWS </p>
      </div>
      <div className="w-full flex items-center justify-center flex-col m-5">
        {news.map((story) => (
          <button
            key={story.id}
            id={story.id}
            className="flex items-center border-2 border-red-500 h-56 w-80vw p-5"
            onClick={() => nav(`/rewards`)}
          >
            <img src={story.imgSmall} className="h-full -z-10" />
            <div className="flex flex-col h-full p-5 w-80vw -z-10">
              <h1 className="bg-red-500 text-white text-2xl p-3">
                {" "}
                {story.title}{" "}
              </h1>
              <p className="text-white text-2xl p-3"> {story.short} </p>
              <p className="text-white text-lg p-3">
                {" "}
                Click here to find out more{" "}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
