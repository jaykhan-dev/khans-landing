import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Head from "next/head";
import { NextPage } from "next";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        allProject {
          slug {
            current
          }
          title
        }
      }
    `,
  });

  const paths = data.allProject.map((param: any) => {
    return {
      params: {
        slug: param.slug.current,
      },
    };
  });

  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: gql`
      query SingleProject($slug: String) {
        allProject(where: { slug: { current: { eq: $slug } } }) {
          title
          _id
          slug {
            current
          }
          bodyRaw
          summary
          category {
            title
          }
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
    variables: {
      slug: params.slug.current,
    },
  });

  const project = data.allProject;

  console.log("params.slug", params.slug);

  return {
    props: {
      project,
    },
  };
}

export default function Project({ project }: any) {
  // if (!project) return <div>No Data!</div>;
  //const { title, summary, slug } = project;

  //console.log("Project", project);
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content="Jay Khan Projects" />
      </Head>
      <div className="h-screen grid place-items-center bg-zinc-900 text-white">
        <div className="p-4 border">
          <h1 className="text-9xl font-black">{project.title}</h1>
          <p>{project.summary}</p>
          <p>{project.slug}</p>
          <p>testing</p>
        </div>
      </div>
    </>
  );
}
