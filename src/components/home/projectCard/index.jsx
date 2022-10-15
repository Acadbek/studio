import {
  Container,
  Description,
  PhotoContent,
  Title,
  VideoContent,
} from "./style";
import React from "react";

const ProjectCard = ({
  mt,
  size,
  link,
  photo,
  title,
  video,
  description = true,
}) => {
  return (
    <Container size={size || 22} mt={mt}>
      <Title>{title || "Who are they?"}</Title>
      <Description>
        {description ? (
          "Säker Canine is a dog accessories brand based in Canada. They specialize in products that make you and your dogs’ lives easier and more comfortable. You can learn more about them here."
        ) : (
          <></>
        )}
      </Description>
      {video && (
        <VideoContent>
          <video
            src="https://studiio.com/wp-content/uploads/2022/09/Reel-3.mp4"
            autoPlay={true}
            loop={true}
            muted="muted"
            controlsList="nodownload"
          ></video>
          <video
            src="https://studiio.com/wp-content/uploads/2022/09/Reel-3.mp4"
            autoPlay={true}
            loop={true}
            muted="muted"
            controlsList="nodownload"
          ></video>
          <video
            src="https://studiio.com/wp-content/uploads/2022/09/Reel-3.mp4"
            autoPlay={true}
            loop={true}
            muted="muted"
            controlsList="nodownload"
          ></video>
        </VideoContent>
      )}
      {photo && (
        <PhotoContent>
          <div className="sliderr">
            <div className="slide-trackk">
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="slidee">
                <img
                  src="https://studiio.com/wp-content/uploads/2022/10/F24DA163-EAC2-4171-A4E3-11F9776657D4-200x300.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </PhotoContent>
      )}
    </Container>
  );
};

export default ProjectCard;
