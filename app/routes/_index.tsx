import type { V2_MetaFunction } from "@remix-run/node";
import { APP_NAME } from "~/utils/globals";
import banner from "~/images/008.gif";
import img_one from "~/images/001.gif";
import img_two from "~/images/002.gif";

export const meta: V2_MetaFunction = () => [{ title: APP_NAME }];

export default function Index() {
  return (
    <main className="white min-h-screen flex-col bg-film-grain">
      <div
        className="relative h-96 w-full scale-90 select-none shadow-sm"
        id="introduction box"
      >
        <div
          className="absolute left-10 top-10 h-[80%] w-[90%] bg-black opacity-60 blur-xl"
          id="filter"
        ></div>
        <img
          src={banner}
          alt="blueridge parkway, NC"
          className="h-full w-full rounded object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center p-10 text-white">
          <h1 className="my-10 max-w-2xl px-5 font-youngSerif text-4xl font-extrabold uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Hello, my name is{" "}
            <span className="text-orange-500">Rudy Flores.</span>{" "}
          </h1>
          <p className="max-w-3xl text-center font-cooperhewitt text-lg font-normal text-white lg:text-xl">
            I am a photographer based in{" "}
            <span className="font-bold text-orange-500">
              Durham, North Carolina
            </span>{" "}
            that focuses on story telling through color grading in my product
            and landscape photography.
          </p>
        </div>
      </div>
      <div
        id="tab-2"
        className="flex flex-row flex-wrap items-center justify-center"
      >
        <div
          id="tab-2a"
          className="flex flex-row flex-wrap items-center justify-center"
        >
          <div
            id="tab-2a-left"
            className="m-5 flex max-w-md select-none flex-col items-center justify-center"
          >
            <h2 className="max-w-xs pb-5 text-center font-youngSerif text-xl font-black uppercase leading-normal">
              Photography in the{" "}
              <span className="text-orange-500 underline underline-offset-4">
                language of color
              </span>
            </h2>
            <p className="text-justify font-cooperhewitt text-lg font-light text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis sem at mauris lobortis scelerisque. Proin pharetra, erat at
              ultricies sagittis, urna eros ultrices nisl, et ullamcorper ipsum
              turpis et dolor. Mauris in orci sed urna feugiat tincidunt egestas
              id metus. Phasellus aliquet magna nec luctus luctus.
            </p>
          </div>
          <div id="tab-2a-right" className="m-5 max-w-sm">
            <img
              src={img_one}
              alt="punta cana, dominican republic"
              className="max-w-full rounded object-contain shadow-sm"
            />
          </div>
        </div>
        <div
          id="separator"
          className="flex min-w-[80%] flex-row flex-wrap items-center justify-evenly"
        >
          <div className="h-0 w-0 border-b-[14px] border-l-[8px] border-r-[8px] border-b-orange-600 border-l-transparent border-r-transparent"></div>
          <h2 className="max-w-[13rem] text-center font-youngSerif text-xl font-black uppercase leading-normal text-black">
            The art of <span className="text-orange-600">color grading</span>
          </h2>
          <div className="h-0 w-0 border-l-[8px] border-r-[8px] border-t-[14px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <div
          id="tab-2b"
          className="flex flex-row flex-wrap items-center justify-center"
        >
          <div id="tab-2b-left" className="m-5 max-w-sm">
            <img
              src={img_two}
              alt="punta cana, dominican republic"
              className="max-w-full rounded object-contain shadow-sm"
            />
          </div>
          <div
            id="tab-2b-right"
            className="m-5 flex max-w-md select-none flex-col items-center justify-center"
          >
            <h2 className="max-w-xs pb-5 text-center font-youngSerif text-xl font-black uppercase leading-normal">
              Color grading can change a settings{" "}
              <span className="text-orange-500 underline underline-offset-4">
                mood
              </span>
            </h2>
            <p className="text-justify font-cooperhewitt text-lg font-light text-black">
              Mauris in orci sed urna feugiat tincidunt egestas id metus.
              Phasellus aliquet magna nec luctus luctus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Maecenas quis sem at mauris
              lobortis scelerisque. Proin pharetra, erat at ultricies sagittis,
              urna eros ultrices nisl, et ullamcorper ipsum turpis et dolor.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
