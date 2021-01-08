import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "85%",
          value: "85"
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "85%", value: "85" },
        
        { id: "C#_skill", content: "C#", porcentage: "80%", value: "80" },
       
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "75%",
          value: "75"
        },
       
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Node.js_skill",
          content: "Node.js",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "AntDesign_skill",
          content: "Ant Design",
          porcentage: "80%",
          value: "80"
        },
        { id: "Bootstrap_skill", content: "Bootstrap", porcentage: "85%", value: "85" },
        { id: "GIT_skill", content: "GIT", porcentage: "80%", value: "80" },
        { id: "AzureDevops_skill", content: "Azure Devops", porcentage: "60%", value: "60" },
        {
          id: "Winforms_skill",
          content: "WinForms",
          porcentage: "80%",
          value: "80"
        },
       
        // {
        //   id: "Dart",
        //   content: "Dart",
        //   porcentage: "60%",
        //   value: "0"
        // },
        // {
        //   id: "Flutter_skill",
        //   content: "Flutter",
        //   porcentage: "50%",
        //   value: "50"
        // },

      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello, my name is Gabriel Juarez, first of all thank you for taking a moment to read my resume and learn more about me."
        },
        {
          id: "second-p-about",
          content:
            "Since I was little I have always been very curious and I have liked to ask many questions about any topic that I do not understand, although sometimes this is uncomfortable 😂, but it is my individual nature and I am sure that of many more people."},
        {
          id: "third-p-about",
          content:
            "I consider myself an introverted person who does not seek to attract much attention, although when it is time to speak I am always willing to take the first step, I am also a person who is constantly learning and enjoys listening to others, myself I enjoy being listened to. I love working as a team, over time I have learned that teamwork can make things easier and more fun."
        },
        {
          id: "four-p-about",
          content:
            "Regarding my profession, I currently consider myself a Front End developer, because I have adapted better, but I still like to know what things happen behind the applications, so in my free time I dedicate a few hours to learn about Back End technologies."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
