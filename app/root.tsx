import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  const description =
    "I'm Michael and I'm a software developer from New York, USA. I \
  graduated from Marist College with a Bachelor's in Computer Science in \
  2020. I use this website to host my projects as well as contact information in case you'd like to reach \
  out. I have experience developing web applications with modern front-end \
  frameworks like React and back-end environments like Node.js. I enjoy \
  building out full stack projects using langugages like Javascript, \
  Typescript, Python, and SQL.";
  const keywords = "Michael Guarino";
  return {
    description,
    keywords,
  };
};

type Props = {
  children?: React.ReactNode;
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,
        initial-scale=1"
        />
        <Links />
        <Meta />
        <title>Michael Guarino</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <header className="header">
        <div className="headerContent">
          <h1>Michael Guarino</h1>
          <div className="nav">
            <Link to="/" className="navLinks">
              about
            </Link>

            <Link to="/projects" className="navLinks">
              projects
            </Link>

            {/* 
              <a
                href="/files/resume.pdf"
                className="navLinks"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
             */}

            <Link to="/contact" className="navLinks">
              contact
            </Link>
          </div>
        </div>
      </header>
      <div className="contentView">{children}</div>
    </div>
  );
}
