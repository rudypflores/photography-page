import type { V2_MetaFunction } from "@remix-run/node";
import { APP_NAME } from "~/utils/globals";
import banner from "~/images/008.gif";
import video from "~/images/011.mp4";

export const meta: V2_MetaFunction = () => [{ title: APP_NAME }];

export default function Index() {
  return (
    <main className="white min-h-screen flex-col">
      <div className="relative h-96 w-full shadow-sm" id="introduction box">
        <div
          className="absolute left-0 top-0 h-full w-full bg-yellow-300 opacity-10 blur-3xl"
          id="filter-black"
        ></div>
        <img
          src={banner}
          alt="blueridge parkway, NC"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center p-5 text-white">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Hello, my name is{" "}
            <span className="text-yellow-300">Rudy Flores</span>{" "}
          </h1>
          <p className="text-center font-sans text-lg font-extralight tracking-tighter text-white lg:text-xl">
            I am a photographer based in{" "}
            <span className="font-bold text-yellow-300">
              Durham, North Carolina
            </span>{" "}
            that focuses on telling stories through color in my product and
            landscape photography.
          </p>
        </div>
      </div>
    </main>
  );
}
