import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  return (
    <div className="relative h-full w-full flex items-center justify-center flex-col">
      <div className="relative w-full xl:w-screen xl:my-5 items-center justify-center mb-16 bg-red-600 flex flex-col">
        <img src="./src/Imgs/logo.png" className="relative mt-5 w-72 xl:w-75vw xl:h-9vh" />
        <img
          src="./src/Imgs/about.png"
          className="relative w-20 mt-3 xl:h-16 xl:w-96"
        />
        <div>
          <button
            className="relative w-24 p-2 items-center justify-center text-white xl:text-2xl hover:shadow-lg hover:bg-white hover:text-black hover:rounded"
            onClick={() => nav("/")}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Home
          </button>
          <button
            className="relative w-32 p-2 items-center justify-center text-white xl:text-2xl xl:w-40  hover:shadow-lg hover:bg-white hover:text-black hover:rounded"
            onClick={() => nav("/critics")}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Game Critic's
          </button>
        </div>
      </div>
      <div className="relative p-2 w-full items-center flex-col flex justify-center">
        <p className="relative p-2 w-full text-lg xl:text-4xl xl:m-10 text-white">
          We are a small group of gamers who love to test and review games. This
          website has been designed to allow us to share our honest opinions on
          how well a game performs and how fun it is.
        </p>
        <p className="relative p-2 w-full text-lg xl:text-4xl xl:m-10 text-white">
          We will also review the customer service provided for the game. Our
          reviews will never be faked or influenced by money. Reviews are
          subject to change in the case of a game update that changes our minds.
        </p>
        <p className="relative p-2 w-full text-lg xl:text-4xl xl:m-10 text-white">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          The site will also provide 'Game Critic' reviews and 'User' reviews to
          give you a variety of opinions that we hope will help you make a good
          decision on the games you choose.
        </p>
      </div>
      <div className="relative flex justify-center items-center w-full h-full">
        <a
          className="relative "
          href="https://www.twitch.tv/trisp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white">
            <img className="h-10 w-10" src="./src/Imgs/twitchlogo.webp" />
          </button>
        </a>
        <a
          className="relativ"
          href="https://www.youtube.com/@Trisp."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white">
            <img className="h-10 w-10" src="./src/Imgs/youtubelogo.webp" />
          </button>
        </a>
      </div>
      <iframe
        className="absolute opacity-0 top-0 -z-10 grid"
        src="https://player.twitch.tv/?channel=trisp&parent=playerreviewedgames.com&muted=true"
        height="10"
        width="10"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default About;
