import React from "react";

const PageCover = ({ title }) => {
  return (
    <>
      <section className="pageCover">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
};

export default PageCover;
