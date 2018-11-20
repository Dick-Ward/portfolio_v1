import React from "react";

const CurrentProject = () => {
  return (
    <div>
      <hr className="currentProjectsLine" />
      <div className="textBox">
        <p>
          I just finished a new project that I'm tenatively calling <a href="https://yelp-disney.herokuapp.com/">Yelp Disney</a>, which is currently hosted on Heroku.  Yelp Disney uses SVG Text as a clip path to create a very cool animated rating, but only works in Firefox.  I spotted this as an issue with Chrome, and submitted a bug report as well as some code for the Chrome team to work with.  The bug has been fixed by the Chrome team and is currently working in Canary.
        </p>

        <p>
        Recently, I participated in building a project called
        <a href="https://medium.com/@TheDickWard/creating-a-fabulous-frontend-for-flatiron-field-day-9d0b09a6a652"> Flatiron Field Day</a>, which was an all-day mini hackathon for our web development students.
        My 15-person team and I were able to create a stable project that was met with high praise by all the
        students that participated.
        </p>
      </div>
    </div>
  );
};

export default CurrentProject;
