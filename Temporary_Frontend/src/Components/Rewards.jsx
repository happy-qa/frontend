import Toolbar from "./Toolbar";

const Rewards = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Toolbar />
      <div className="w-80vw bg-twitch-purple flex items-center justify-center mt-10">
        <img src=".\src\Imgs\twtichname.png" />
      </div>
      <div className="flex w-80vw items-center justify-center flex-col border-8 border-twitch-purple ">
        <div className="flex items-center justify-center flex-col lg:inline-grid lg:grid-cols-5 lg:place-items-center">
          <div className="flex items-center justify-center bg-twitch-purple flex-col m-5">
            <div className="w-full p-5">
              <div className="bg-5gift bg-contain bg-no-repeat bg-center w-full h-10" />
            </div>
            <img src=".\src\Imgs\10subs.png" />
          </div>
          <div className="flex items-center justify-center bg-twitch-purple flex-col m-5">
            <div className="w-full p-5">
              <div className="bg-10gift bg-contain bg-no-repeat bg-center w-full h-10" />
            </div>
            <img src=".\src\Imgs\10subs.png" />
          </div>
          <div className="flex items-center justify-center bg-twitch-purple flex-col m-5">
            <div className="w-full p-5">
              <div className="bg-25gift bg-contain bg-no-repeat bg-center w-full h-10" />
            </div>
            <img src=".\src\Imgs\10subs.png" />
          </div>
          <div className="flex items-center justify-center bg-twitch-purple flex-col m-5">
            <div className="w-full p-5">
              <div className="bg-50gift bg-contain bg-no-repeat bg-center w-full h-10" />
            </div>
            <img src=".\src\Imgs\10subs.png" />
          </div>
          <div className="flex items-center justify-center bg-twitch-purple flex-col m-5">
            <div className="w-full p-5">
              <div className="bg-100gift bg-contain bg-no-repeat bg-center w-full h-10" />
            </div>
            <img src=".\src\Imgs\10subs.png" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col lg:flex-row text-white text-xl bg-twitch-purple m-5 w-50vw">
          <p>Disclaimer: To get the rewards you must join</p> <a
          className="relative"
          href="https://discord.gg/x3GZHVdrJF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white mx-1 hover:text-blue-400 hover:underline">
             Discord 
          </button>
        </a> <p>and message Trisp with where you want the card to be sent to.</p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
