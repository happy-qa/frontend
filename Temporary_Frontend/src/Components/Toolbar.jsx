import { useNavigate } from "react-router-dom";

const Toolbar = () => {
    const nav = useNavigate();
    return (
        <div className="relative h-11vh w-screen items-center justify-center bg-red-600 xl:w-105vw xl:h-15vh xl:my-3 flex flex-col 2xl:my-5">
        <img
          src="/src/Imgs/logo.png"
          className="relative h-3vh w-75vw xl:h-9vh "
        />
        <div>
          <button
            className="relative text-white text-md xl:p-2 xl:my-1 z-10 2xl:text-2xl xl:h-12 hover:text-black hover:bg-white hover:rounded"
            onClick={() => nav("/")}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Home
          </button>
          <button
            className="relative text-white text-md px-1 z-10 xl:p-2 xl:my-1 2xl:text-2xl xl:h-12 hover:text-black hover:bg-white hover:rounded"
            onClick={() => nav("/about")}
          >
            About us
          </button>
          <button
            className="relative text-white text-md xl:p-2 xl:my-1 z-10 2xl:text-2xl xl:h-12 hover:text-black hover:bg-white hover:rounded"
            onClick={() => nav("/critics")}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Game Critics
          </button>
        </div>
      </div>
    )
}

export default Toolbar;