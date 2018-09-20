import React from "react";

const CurrentProject = () => {
  return (
    <div>
      <hr className="currentProjectsLine" />
      <div className="textBox">
        <p>
          I just finished launching a project called <a href="https://medium.com/@TheDickWard/creating-a-fabulous-frontend-for-flatiron-field-day-9d0b09a6a652">Flatiron Field Day</a>, which was an all-day mini hackathon for our web development students.
          My 15-person team and I were able to create a stable project that was met with high praise by all the
          students that participated.
        </p>


        <p>
          My next big push is going to be a deeper dive into React, and completion of a personal project of mine
          which uses React, Redux, and data-set that's going to force me to make some interesting design decisions.
        </p>

        <p>
        I'm also working my way through 'The Complete Junior to Senior Developer' on Udemy, which I'm finding fasctinating!
        Writing effective tests is something I've long been interested in, and I'm looking forward to having that skillset.
        </p>
      </div>
    </div>
  );
};

export default CurrentProject;
