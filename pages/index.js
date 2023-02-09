import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/illustration-aqsa 3.png";
import githubemoji from "../public/githubemoji.png";
import twitteremoji from "../public/twitteremoji.png";
import linkedinemoji from "../public/linkedinemoji.png";
import instagramemoji from "../public/instagramemoji.png";
import design from "../public/design.png";
import code from "../public/code.png";
import blog from "../public/blog.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { use, useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aqsa Aqeel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="h-screen min-h-screen flex flex-col">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Aqsa Aqeel</h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode((darkMode) => !darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1p61CuG0UDFiDiZG_dapsykh4gDbL_j6G/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Aqsa Aqeel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Frontend Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Frontend conneuseur with a love for design and building beautiful
              apps. Aqsa loves how code obeys everything she asks it for. When
              she is not coding, she is video editing or writing. Her self
              learning journey has also lead to cooking food.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/aqsaaqeel"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/aqsa-aqeel"><AiFillLinkedin /></a>
            <a href="https://twitter.com/aqsacodes"><AiFillTwitterCircle /></a>
            <a href="https://www.instagram.com/aqsacodes/"><AiFillInstagram /></a>
          </div>
          <div className="w-100 h-auto pb-10">
            <div className="relative mx-auto rounded-full h-60 w-60 py-10 mt-5 md:w-80 md:h-80">
              <Image
                className="rounded-full"
                fill
                style={{ objectFit: "cover" }}
                src={deved}
              />
            </div>
          </div>
          <section>
            <h3 className="text-3xl py-1">What do I do</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Ever since a kid, I have been fascinated with websites design and
              engineering in general. And so growing up, I chose{" "}
              <span className="text-teal-500">frontend development</span>{" "}
              because it serves as a bridge of both these worlds.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              I have spent the last year learning React and JavaScript and
              gathered a lot of frontend experience. So much so, that now I can
              transition to any kind of framwork easily. I have also worked as a{" "}
              <span className="text-teal-500">frontend intern</span> at a remote
              startup. This internship made me dive into the professional world
              of frontend and I learnt about how things work in the industry.
            </p>
          </section>
          <div className="lg:flex lg:justify-center gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend Development
              </h3>
              <p className="py-2">
                Developing web apps using modern code practices
              </p>
              <h4 className="py-4 text-teal-600">Development tools</h4>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">TypeScript</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={blog} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Blogs</h3>
              <p className="py-2">
                Technical blogs and content writing in general
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Ever since a kid, I have been fascinated with websites design and
              engineering in general. And so growing up, I chose{" "}
              <span className="text-teal-500">frontend development</span>{" "}
              because it serves as a bridge of both these worlds.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <div className="relative hover:cursor-pointer">
                <a href="https://animeedio-video-library.vercel.app/"><Image
                  src={web1}
                  className="rounded-lg object-cover blur-sm hover:blur-none"
                  width={"100%"}
                  height={"100%"}
                /></a>
                <h1 className="text-2xl px-2 text-gray-100 rounded-lg shadow-slate-400 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Video Library
                </h1>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="relative hover:cursor-pointer">
                <a href="https://april-ui.netlify.app/"><Image
                  src={web2}
                  className="rounded-lg object-cover blur-sm hover:blur-none"
                  width={"100%"}
                  height={"100%"}
                /></a>
                <h1 className="text-2xl px-2 text-gray-100 rounded-lg shadow-slate-400 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Component Library
                </h1>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="relative hover:cursor-pointer">
                <a href="https://ecom-thrift-shop-aqsaaqeel.vercel.app/"><Image
                  src={web3}
                  className="rounded-lg object-cover blur-sm hover:blur-none"
                  width={"100%"}
                  height={"100%"}
                /></a>
                <h1 className="text-2xl px-2 text-gray-100 rounded-lg shadow-slate-400 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  E-commerce Web App
                </h1>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <div className="relative hover:cursor-pointer">
                <a href="https://63dd50a9478c360008ddcb7e--pomo-timer-for-productivity.netlify.app/"><Image
                  src={web4}
                  className="rounded-lg object-cover blur-sm hover:blur-none"
                  width={"100%"}
                  height={"100%"}
                /></a>
                <h1 className="text-2xl px-2 text-gray-100 rounded-lg shadow-slate-400 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Productivity Timer
                </h1>
              </div>
            </div>
          </div>
          <div className="pt-15">
            <footer className="p-4 pt-24 bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
              <span className="text-sm text-white sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" class="hover:underline">
                  Aqsa Aqeel
                </a>
                {" "}would love to chat {"<3"}
              </span>
              <ul className="h-5 flex flex-wrap items-center justify-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
                <li className="max-w-s">
                  <a href="https://github.com/aqsaaqeel" class="mr-4 hover:underline md:mr-6 ">
                    <Image src={githubemoji} className="h-5 w-5"/>
                  </a>
                </li>
                <li className="max-w-xs">
                  <a href="https://www.linkedin.com/in/aqsa-aqeel" class="h-5 mr-4 hover:underline md:mr-6">
                  <Image src={linkedinemoji} className="h-5 w-5"/>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/aqsacodes" class="mr-4 hover:underline md:mr-6">
                  <Image src={twitteremoji} className="h-5 w-5"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/aqsacodes/" class="mr-4 hover:underline md:mr-6">
                  <Image src={instagramemoji} className="h-5 w-5"/>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
