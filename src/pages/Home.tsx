import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="Introduction">
        <hr className="Green-Line" />
        <div>
          <p className="Heading">Hello There!</p>
          <div className="Sub-Head">
            <div className="Full-Name">
              <span className="Prefix">I'm </span>
              <span className="name">JustinT,</span>
            </div>
            <p className="Position">Sales Executive</p>
            <p className="Position">Relationship Manager</p>
          </div>
          <div className="Action-Container ActionHead ">
            <div className="View-Container">
              <div className="View">View My Portfolio</div>
              <div className="Arrow-Container">
                <img
                  src=".\assets\images\Home\Arrow.png"
                  alt=""
                  className="Arrow-Icon"
                />
              </div>
            </div>
            <div className="Hire">Hire me!</div>
          </div>
        </div>
      </div>

      <hr className="Break-Line" />
      <div className="About-Me-Container">
        <div className="ProfileImage-Container">
          <img src=".\assets\images\Home\Profile Image.png" alt="" className="ProfileImage" />
        </div>
        <div className="About-Me-Content">
          <hr className="YellowA-Line" />
          <div className="About">
            <p className="Ab">About Me</p>
            <div>
              <span className="Who-is">Who is </span>
              <span className="JustinT">JustinT?</span>
            </div>
            <div className="Description-Container">
              <img
                src=".\assets\images\Home\Edu-Icon.png"
                alt=""
                className="About-Icon"
              />
              <p className="Description">EDUCATION</p>
            </div>

            <p className="Sub-Description">Foreign Trade University</p>
            <p className="Sub-Description">
              (Bachelor of International Economics)
            </p>

            <div className="Description-Container">
              <img
                src=".\assets\images\Home\Work-Icon.png"
                alt=""
                className="About-Icon"
              />
              <p className="Description">WORKING EXPERIENCES</p>
            </div>
            <p className="Sub-Description">
              Sales Executive at Vantage Logistics Company
            </p>
            <p className="Sub-Description">
              Relationship Manager at DNBC Financial Group (BIN Group
              Coperation)
            </p>
            <div className="Action-Container Action-About">
              <div className="View-Container">
                <div className="View">More About Me</div>
                <div className="Arrow-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="Arrow-Icon"
                  />
                </div>
              </div>
              <div className="CV-Container">
                <img
                  src=".\assets\images\Home\Download.png"
                  alt=""
                  className="Download-Icon"
                />
                <p className="CV">My CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="Break-Line" />

      <div className="Services">
        <div className="All-Heading">
          <div className="Heading-Container">
            <div className="Heading-Content">
              <hr className="Yellow-Line" />
              <p className="Heading-Text">Services</p>
            </div>
            <p className="Sub-Heading-Text">I PROVIDE</p>
          </div>
          <div>
            <div className="Action-Container Action-Services">
              <div className="View-Container">
                <div className="View">View My Services</div>
                <div className="Arrow-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="Arrow-Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Services-Sub">
          <div className="Services-Sub-Container">
            <img
              src=".\assets\images\Home\Service1.png"
              alt=""
              className="Services-icon"
            />
            <p className="Services-Sub-Content">FULL TIME</p>
            <p className="Services-Sub-Details">Sales</p>
            <p className="Services-Sub-Details">Customer Services</p>
          </div>

          <div className="Services-Sub-Container">
            <img
              src=".\assets\images\Home\Service2.png"
              alt=""
              className="Services-icon"
            />
            <p className="Services-Sub-Content">PART TIME</p>
            <p className="Services-Sub-Details">Website Designer</p>
            <p className="Services-Sub-Details">Teaching</p>
          </div>

          <div className="Services-Sub-Container">
            <img
              src=".\assets\images\Home\Service3.png"
              alt=""
              className="Services-icon"
            />
            <p className="Services-Sub-Content">SELF-EMPLOYED</p>
            <p className="Services-Sub-Details">Mindset Site</p>
            <p className="Services-Sub-Details">Listener</p>
          </div>
        </div>
      </div>

      <div className="Tools">
        <div className="Heading-Container Heading-Tools">
          <div className="Heading-Content">
            <hr className="Yellow-Line" />
            <p className="Heading-Text">Tools</p>
          </div>
          <p className="Sub-Heading-Text">I CAN USE</p>
        </div>

        <div className="Tool-Sub-Container">
          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Adobe_Premier_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Adobe Premiere</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Adobe_Photoshop_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Adobe Photoshop</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Adobe_Illustrator_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Adobe Illustrator</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Pinterest_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Pinterest</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Figma-Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Figma</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Canva_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Canva</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\CapCut_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Capcut</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Zoho_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Zoho</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Notion_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Notion</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\ChatGPT_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">ChatGPT</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Grok_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Grok AI</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\Trello_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Trello</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\GoogleDrive_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Google Drive</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\MsTeams_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">MS Teams</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\VSCode_Icon.jpeg"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">VS Code</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\AppScript_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">Apps Script</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\InVideo_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">InVideo AI</div>
          </div>

          <div className="Tool-Icon-Field">
            <div className="Tool-Icon-Container">
              <img
                src=".\assets\images\Home\WordPress_Icon.png"
                alt=""
                className="Tool-Icon"
              />
            </div>
            <div className="Icon-Name">WordPress</div>
          </div>
        </div>
      </div>

      <div className="Projects">
        <div className="All-Heading">
          <div className="Heading-Container">
            <div className="Heading-Content">
              <hr className="Yellow-Line" />
              <p className="Heading-Text">Projects</p>
            </div>
            <p className="Sub-Heading-Text">I HAVE WORKED ON</p>
          </div>
          <div>
            <div className="Action-Container Action-Projects">
              <div className="View-Container">
                <div className="View">View My Projects</div>
                <div className="Arrow-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="Arrow-Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Projects-Sub">
          <div className="Projects-Sub-Container">
            <div className="Projects-Sub-Content">
              <img
                src=".\assets\images\Home\Project1.png"
                alt=""
                className="Project-Image"
              />
            </div>

            <div className="Projects-Sub-Details">
              <div className="Projects-Title">Web Design</div>
              <div className="Projects-Link">
                <p className="Project-Name">MY WEBSITE</p>
                <div className="ArrowP-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="ArrowP-Icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Projects-Sub-Container">
            <div className="Projects-Sub-Content">
              <img
                src=".\assets\images\Home\AppSripts1.png"
                alt=""
                className="Project-Image"
              />
            </div>

            <div className="Projects-Sub-Details">
              <div className="Projects-Title">Apps Script</div>
              <div className="Projects-Link">
                <p className="Project-Name">EMAIL AUTO SEND</p>
                <div className="ArrowP-Container">
                  <img
                    src=".\assets\images\Home\Arrow.png"
                    alt=""
                    className="ArrowP-Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
