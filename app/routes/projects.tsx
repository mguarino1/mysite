import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  const data = {
    projects: [
      {
        id: 1,
        name: "Crypto Prices",
        description:
          "Basic cryptocurrency streaming app using the CryptoCompare API",
        github: "https://github.com/mguarino1/cryptoapp",
      },
      {
        id: 2,
        name: "Music Reference",
        description: "Simple music reference site built with React",
        github: "https://github.com/mguarino1/MusicRef",
        demo: "https://music-ref.vercel.app/",
      },
    ],
  };
  return data;
};

interface Project {
  id: number;
  name: string;
  description: string;
  github: string;
  demo?: string;
}

/* function linkify(link: string, name: string) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
} */

function Projects() {
  const { projects } = useLoaderData();

  return (
    <div className="contentBox">
      <h1 className="contentHeaders">projects</h1>
      <div className="contentBody">
        {projects.map((p: Project) => (
          <p key={p.id} className="projectTile">
            {p.name}: {p.description}{" "}
            {p.demo ? (
              <p>
                [
                <a href={p.github} target="_blank" rel="noreferrer">
                  github|
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer">
                  demo
                </a>
                ]
              </p>
            ) : (
              <p>
                [
                <a href={p.github} target="_blank" rel="noreferrer">
                  github
                </a>
                ]
              </p>
            )}
          </p>
        ))}
        <p style={{ paddingTop: "50px" }}>...and more coming soon!</p>
      </div>
    </div>
  );
}

export default Projects;
