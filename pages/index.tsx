import React from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import Projects from "../components/projects";
import ServicesTwo from "../components/servicesTwo";
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
import styels from "../components/bg.module.css";

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
        <meta />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>

      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="text-xl uppercase text-center bg-black text-white py-20">
          <p>Portfolio</p>
        </div>
        <Marquee speed={100} className="flex space-x-10 items-center">
          <h1 className={styles.largeText}>Jay Khan</h1>
          <div className="mx-20 w-64 border-t border-black"></div>
        </Marquee>
        <motion.div
          className={styles.spline}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <div className="absolute bottom-4 right-4 w-36 h-12 z-50"></div>
          <Iframe
            url="https://my.spline.design/interactivespherescopy-397558837af7b3db9602d1bcc603c9f9/"
            width="100%"
            height="100%"
            display="block"
            position="absolute"
          />

          {/* <Temple /> */}
          {/* <Spheres /> */}
          {/* <SceneTwo /> */}
        </motion.div>
      </motion.div>

      {/* PROJECTS DYNAMIC SANITY STUDIO */}
      <motion.div className="p-4">
        {/* <Projects /> */}

        <div className="lg:w-2/3 mx-auto py-20">
          <h1 className="text-4xl my-4">Projects</h1>

          <div className="grid lg:grid-cols-3 gap-8 space-y-3 rounded">
            {allProject?.map((project: any) => (
              <div
                key={project._id}
                className="p-4 border hover:shadow-lg duration-300"
              >
                <Image
                  src={project.projectImage?.asset.url}
                  alt="project image"
                  width={300}
                  height={300}
                />
                <h2 className="font-bold text-3xl border-b py-4">
                  {project.title}
                </h2>
                <p>{project.summary}</p>
                <div className="flex items-center justify-between space-x-2 my-4">
                  <button className="px-1 border rounded">
                    category:{" "}
                    {project?.category.map((cat: any) => (
                      <p key={cat?._id}>{cat?.title}</p>
                    ))}
                  </button>
                  <p></p>
                  <Link href="/">
                    <button className="bg-black text-white px-1 rounded">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div>
        <ServicesTwo />
      </motion.div>
      {/* TESTIMONTIALS */}
      {/* <motion.div>
        <Testimonials />
      </motion.div> */}
      <motion.div>
        <Bio />
      </motion.div>
    </>
  );
};

export default Home;
