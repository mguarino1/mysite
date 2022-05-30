function Contact() {
  return (
    <div className="contentBox">
      <h1 className="contentHeaders">contact</h1>
      <p className="contentBody">
        Feel free to reach out if you have any questions, or if you'd just like
        to say hi.
      </p>
      <p className="contentBody">
        Email:{" "}
        <a href="mailto: me@michaelguarino.info">me@michaelguarino.info</a>
      </p>
      <p className="contentBody">
        <a
          href="https://github.com/mguarino1/"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <p className="contentBody">
        <a
          href="https://linkedin.com/in/michaelguarino223/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p className="contentBody">
        This is where I'd put my social media links... if I had any.
      </p>
      {/* <a href="../files/resume" target="_blank" rel="noreferrer">
        cv
      </a> */}
    </div>
  );
}

export default Contact;
