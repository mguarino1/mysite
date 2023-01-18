import { useLoaderData } from '@remix-run/react';

export const loader = () => {
  const data = {
    projects: [
      {
        id: 1,
        name: 'playcheckers.io',
        description: 'Online checkers',
        demo: 'https://www.playcheckers.io/',
      },
    ],
  };
  return data;
};

interface Project {
  id: number;
  name: string;
  description: string;
  github?: string;
  demo?: string;
}

function Projects() {
  const { projects } = useLoaderData();

  return (
    <div className="contentBox">
      <h1 className="contentHeaders">projects</h1>
      <div className="contentBody">
        {projects.map((p: Project) => (
          <p key={p.id} className="projectTile">
            <a href={p.demo} target="_blank" rel="noreferrer">
              {p.name}
            </a>
            : {p.description}{' '}
          </p>
        ))}
        <p>...and more coming soon!</p>
      </div>
    </div>
  );
}

export default Projects;
