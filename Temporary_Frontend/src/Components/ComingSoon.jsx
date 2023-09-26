import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const nav = useNavigate();
  return (
    <div className="relative h-ful w-full flex items-center justify-center flex-col grid-cols-1">
      <div className="relative h-11vh w-108vw items-center justify-center bg-red-600 xl:w-105vw xl:h-15vh xl:my-3 flex flex-col 2xl:my-5">
        <img
          src="/src/Imgs/logo.png"
          className="relative h-3vh w-75vw xl:h-9vh "
        />
        <div>
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
      <div className="relative bg-mobilecs bg-contain bg-no-repeat w-75vw h-65vh xl:bg-commingsoon xl:w-screen left-2" />
      <p className="relative text-white 2xl:text-2xl">
        In the meantime you can also check out:
      </p>
      <p className="relative text-white 2xl:text-2xl">Trisp</p>
      <div>
        <a
          className="relative"
          href="https://www.twitch.tv/trisp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="">
            <img
              className="h-10 w-10"
              src="./src/Imgs/twitchlogo.webp"
            />
          </button>
        </a>
        <a
          className="relative"
          href="https://www.youtube.com/@Trisp."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white">
            <img
              className="h-10 w-10"
              src="./src/Imgs/youtubelogo.webp"
            />
          </button>
        </a>
      </div>
      <iframe
        className="absolute opacity-0 top-0 -z-0 xl:top-28 left-0"
        src="https://player.twitch.tv/?channel=trisp&parent=playerreviewedgames.com&muted=true"
        height="10"
        width="10"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default ComingSoon;
