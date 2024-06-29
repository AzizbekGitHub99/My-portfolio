import React from "react";

const WorkCard = ({ work }) => {
  return (
    <div
      href="https://sultan-clone.netlify.app/"
      className="work-card"
      target="_blank"
      rel="noreferrer"
    >
      <div className="card-up" style={{backgroundImage: work.image}}>
        <div className="up-curtain">
          <a href={work.url}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#fff" />
              <path
                d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z"
                fill="#fff"
              />
            </svg>
          </a>
          <a href={work.gurl}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 -4 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>
                content / 33 - content, code, css, html, html code, script icon
              </title>
              <g
                id="Free-Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g
                  transform="translate(-303.000000, -456.000000)"
                  id="Group"
                  stroke="#fff"
                  stroke-width="2"
                >
                  <g transform="translate(301.000000, 450.000000)" id="Shape">
                    <polyline points="8 17 3 11.8672478 8 7"></polyline>
                    <polyline points="16 17 21 11.8672478 16 7"></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="card-down">
        <h4>{work.name}</h4>
      </div>
    </div>
  );
};

export default WorkCard;
