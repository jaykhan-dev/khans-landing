import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function getStaticPaths() {
  const paths: any = [];
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const GET_PROJECT_BY_ID = gql`
    query SingleProject($id: ID!) {
      Project(id: $id) {
        title
        _id
        slug {
          current
        }
        bodyRaw
        summary
        documentation
        category {
          title
        }
        projectImage {
          asset {
            url
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_PROJECT_BY_ID,
    variables: {
      id: params._id,
    },
  });

  const project = response.data?.Project;
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
        <title>{project?.title}</title>
        <meta name="description" content="Jay Khan Projects" />
      </Head>
      <div className="grid place-items-center py-20 bg-zinc-900 text-white">
        <div className="p-4 my-20">
          <Image
            src={project.projectImage.asset.url}
            width={400}
            height={400}
            alt="project image"
          />
          <h1 className="lg:text-9xl text-4xl my-8 font-black">
            {project?.title}
          </h1>
          <p className="text-xl my-4">{project?.summary}</p>
          {/* <p>{project?.slug.current}</p> */}
          {project.bodyRaw?.map((content: any) => (
            <div key={content._key}>
              {content.children.map((textContent: any) => (
                <article
                  key={textContent._key}
                  dangerouslySetInnerHTML={{ __html: textContent.text }}
                  className="text-2xl my-8"
                ></article>
              ))}
            </div>
          ))}
          {/* <article
            dangerouslySetInnerHTML={{ __html: project.bodyRaw.children.text }}
          ></article> */}
          <button className="p-2 border border-white/10 rounded">
            <a href={project.documentation}>Docs</a>
          </button>
        </div>
      </div>
    </>
  );
}
