import React from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import Projects from "../components/projects";
import ServicesTwo from "../components/servicesTwo";
import Services from "../components/services";
// import Testimonials from "../components/testimonials";
import Bio from "../components/bio";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import styles from "../components/hero.module.css";
// import Spheres from "../components/reactThreeFiberTwo";
import Iframe from "react-iframe";
import type { GetStaticProps, NextPage } from "next";
// import { GraphQLClient, gql } from "graphql-request";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/hero";
import Skills from "../components/skills";

const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        allProject {
          title
          _id
          slug {
            current
          }
          summary
          category {
            _id
            title
          }
          documentation
          live
          tags {
            title
          }
          projectImage {
            asset {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      allProject: data.allProject,
    },
  };
}

const Home: NextPage = ({ allProject }: any) => {
  //console.log(allProject);

  if (!allProject) return <div>No Data!</div>;

  return (
    <>
      <Head>
        <title>Jay Khan Portfolio</title>
        <meta
          name="description"
          content="Frontend developer, graphic designer, and Bitcoin advocate"
        />
      </Head>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      <Hero />

      {/* SERVICES */}
      <motion.div id="services">
        <ServicesTwo />
      </motion.div>

      {/* PROJECTS DYNAMIC SANITY STUDIO */}
      <motion.div className="p-4 bg-zinc-800">
        {/* <Projects /> */}

        <div id="projects" className="lg:w-2/3 mx-auto py-20">
          <h1 className="text-8xl my-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600 py-8">
            Work
          </h1>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {allProject?.map((project: any) => (
              <Link
                href={`/projects/${project.slug.current}`}
                key={project.slug?.current}
                className="border border-zinc-700 rounded hover:shadow-lg duration-300 hover:scale-95"
              >
                <Image
                  src={project.projectImage?.asset.url}
                  alt="project image"
                  width={450}
                  height={300}
                />
                <div className="py-2 flex text-white uppercase text-sm p-4">
                  {project?.category.map((cat: any) => (
                    <p key={cat?._id}>{cat?.title}</p>
                  ))}
                </div>
                <h2 className="font-bold text-white text-xl px-4">
                  {project.title}
                </h2>
                <p className="text-white/80 px-4 py-1">{project.summary}</p>
                {/* <div className="uppercase space-x-2 text-white p-4 flex items-center justify-center border-b border-zinc-700">
                  <a
                    href={project.documentation}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="border border-zinc-700 p-2 rounded hover:scale-95 duration-300">
                      Docs
                    </button>
                  </a>
                  <a
                    href={project.live}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="border border-zinc-700 p-2 rounded hover:scale-95 duration-300">
                      Live
                    </button>
                  </a>
                </div> */}
                <div className="flex items-center justify-between space-x-2">
                  {/* <Link href="/">
                    <button className="bg-black text-white px-1 rounded">
                      See More
                    </button>
                  </Link> */}
                </div>
                {/* TAGS */}
                <div className="p-4">
                  {project.tags?.map((t: any) => (
                    <button key={t?._id}>
                      <p className="p-1 mx-1 my-1 border border-zinc-600 rounded text-white text-sm font-mono">
                        {t?.title}
                      </p>
                    </button>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* <div>
        <Skills />
      </div> */}
      <div className="h-screen bg-gradient-to-b from-zinc-800 to-zinc-900">
        <iframe
          src="https://my.spline.design/interactivespherescopy-397558837af7b3db9602d1bcc603c9f9/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
