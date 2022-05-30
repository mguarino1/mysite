import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  const description = "Michael Guarino";
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
          <ul className="nav">
            <li>
              <Link to="/" className="navLinks">
                about
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navLinks">
                projects
              </Link>
            </li>
            {/* <li>
              <a
                href="/files/resume.pdf"
                className="navLinks"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </li> */}
            <li>
              <Link to="/contact" className="navLinks">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="contentView">{children}</div>
    </div>
  );
}
