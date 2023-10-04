import Toolbar from "./Toolbar";

const ComingSoon = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col grid-cols-1">
      <Toolbar />
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
