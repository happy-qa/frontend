import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="relative p-10 xl:right-19rem xxl:right-38rem 3xl:right-83.5rem 3xl:w-screen bg-red-600 w-95vw right-7.5rem">
        <img
          src="./src/Imgs/logo.png"
          className="relative w-50rem left-20rem xl:left-32rem xl:h-5rem"
        />
        <img
          src="./src/Imgs/about.png"
          className="relative w-32remem top-3 left-20rem xl:left-48rem xl:h-12"
        />
        <button
          className="relative w-24 p-2 align-middle justify-center right-1 top-5 xxl:text-5xl xxl:w-72 text-white hover:shadow-lg hover:bg-white hover:text-black hover:rounded"
          onClick={() => nav("/")}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Home
        </button>
        <button
          className="relative w-32 p-2 align-middle justify-center right-2 top-5 xxl:text-5xl xxl:w-72 text-white  hover:shadow-lg hover:bg-white hover:text-black hover:rounded"
          onClick={() => nav("/critics")}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Game Critic's
        </button>
      </div>
      <div className="relative -bottom-10 top-12 md:-right-1 lg:-right-10.5rem xl:top-10 xl:-right-32 p-2 w-50rem min-h-0 h-96 xl:h-32rem xl:w-60rem align-middle justify-center">
        <p className="relative min-h-0 -bottom-2 text-2xl xl:text-4xl text-white">
          We are a small group of gamers who love to test and review games. This
          website has been designed to allow us to share our honest opinions on
          how well a game performs and how fun it is.
        </p>
        <p className="relative min-h-0 -bottom-8 p-2 text-2xl xl:text-4xl text-white">
          We will also review the customer service provided for the game. Our
          reviews will never be faked or influenced by money. Reviews are
          subject to change in the case of a game update that changes our minds.
        </p>
        <p className="relative min-h-0 -bottom-12 p-2  text-2xl xl:text-4xl text-white">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          The site will also provide 'Game Critic' reviews and 'User' reviews to
          give you a variety of opinions that we hope will help you make a good
          decision on the games you choose.
        </p>
      </div>
      <a
        className="relative right-12 md:top-14 xl:top-24 xl:right-1"
        href="https://www.twitch.tv/trisp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-white">
          <img className="h-10 w-10" src="./src/Imgs/twitchlogo.webp" />
        </button>
      </a>
      <a
        className="relative right-12 md:top-14 xl:top-24 xl:right-1"
        href="https://www.youtube.com/@Trisp."
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-white">
          <img className="h-10 w-10" src="./src/Imgs/youtubelogo.webp" />
        </button>
      </a>
      <iframe
        className="absolute opacity-0 top-0 -z-10"
        src="https://player.twitch.tv/?channel=trisp&parent=playerreviewedgames.com&muted=true"
        height="440"
        width="790"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default About;
