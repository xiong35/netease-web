import "./index.scss";

type HomeTitleProps = {
  title: string;
};

function HomeTitle(props: HomeTitleProps) {
  const { title } = props;

  return (
    <div className="home_title">
      <span className="home_title-content">{title}</span>
      <svg
        className="home_title-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5210"
        width="200"
        height="200"
      >
        <path
          d="M0 0h1024v1024H0z"
          fill="var(--on-bg)"
          opacity=".01"
          p-id="5211"
        ></path>
        <path
          d="M615.8848 512l-318.976-319.9488c-20.4288-20.48-20.4288-53.76 0-74.24 20.48-20.5312 53.7088-20.5312 74.1376 0L727.04 474.88c20.48 20.48 20.48 53.76 0 74.24L371.0464 906.24c-20.48 20.5312-53.6064 20.5312-74.0864 0-20.48-20.48-20.48-53.76 0-74.24L615.8848 512z"
          fill="var(--on-bg)"
          p-id="5212"
        ></path>
      </svg>
    </div>
  );
}

export default HomeTitle;
