import CollapsibleBox from "../components/CollapsibleBox"
import SkillsTag from "../components/SkillsTag"
import InfoBox from "../components/InfoBox";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-[#FFC2E5] px-4 gap-10 py-10 min-h-screen">

      {/* Journey Box */}
      <CollapsibleBox title="My Journey">
        <InfoBox>
          <div className="space-y-4">
            <p>
              Ever since I was a kid, I’ve been fascinated by computers and technology. I knew early on that I wanted to work in tech, but I didn’t yet know
              which area would truly capture my interest, given how broad the field is.
            </p>

            <p>
              In high school, I took a few Computer Science classes and quickly found that I enjoyed programming and problem-solving. Still, something felt
              missing. I was good at it, but I wanted to work on something more tangible, something I could see and interact with. That curiosity eventually led
              me to the Computer Engineering Technology (CNT) program at NAIT, where I discovered a mix of hardware and software courses. It was there that I was
              introduced to Embedded Systems: a blend of low-level programming, real-world interfacing, and applied electrical theory. It felt like everything I’d
              learned up to that point finally came together.
            </p>

            <p>
              My real passion for Embedded Systems started during my final semester capstone project, where my team and I built an autonomous medication delivery
              robot. It was rough around the edges and not perfect by any means, but it worked! I had never felt such fulfillment from a project before. That’s
              when I knew I wanted to keep pursuing embedded development.
            </p>

            <p>
              After completing the CNT program, I decided to broaden my skills with the Bachelor of Technology in Management (BTech) program at NAIT. I already had
              the technical foundation, but I wanted to improve my soft skills like communication, presentation skills, and leadership. While working through business
              courses and presentations, I continued teaching myself embedded systems on the side. I took Udemy courses on bare-metal STM microcontroller programming
              and real-time operating systems (RTOS), then built small projects like developing custom drivers and using them in a proximity-based alarm system.
            </p>

            <p>
              In my final BTech semester, I worked on an automatic braking system for medical walkers in collaboration with the Glenrose Rehabilitation Hospital.
              I designed the PCB, wrote the firmware, and selected the components to solve a real problem faced by patients with cognitive challenges who often forget
              to engage their brakes. Presenting the completed system to engineers and clinicians, then seeing how it could make a real difference, was incredibly rewarding.
              It reminded me why I love what I do: solving real-world problems. To top it all off, I later received a $10,000 stipend thanks to MITACS and Edmonton Unlimited
              in order to further develop the project and explore its potential as a product.
            </p>

            <p>
              During that time, I also came across an opportunity to work as a Research Assistant focusing on Embedded Systems, where I’ve been able 
              to apply everything I’ve learned and continue expanding my skills in a real-world setting. I’ve worked on developing safety-critical firmware for environmental monitoring 
              devices using FreeRTOS, designed and tested custom PCBs, and built full-stack systems integrating firmware, cloud integration, databases, and web dashboards. 
              It’s been an incredible experience that bridges my academic foundation with hands-on experience and has been a reassurance that proves that embedded 
              systems is where I belong.
            </p>

            <p>
              Thank you for taking the time to read about my journey, and I hope you found it insightful!
            </p>
          </div>
        </InfoBox>
      </CollapsibleBox>


      {/* Education Box*/}
      <CollapsibleBox title="Education">
        <InfoBox>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-lg">Degree</dt>
              <dd>Bachelor of Technology in Management (Honors), 2023–2025</dd>
            </div>
            <div>
              <dt className="font-semibold text-lg">Diploma</dt>
              <dd>Computer Engineering Technology, 2020–2023</dd>
            </div>
            <div>
              <dt className="font-semibold text-lg">Institution</dt>
              <dd>Northern Alberta Institute of Technology (NAIT)</dd>
            </div>
          </dl>
        </InfoBox>
      </CollapsibleBox>

      {/* Experience Box*/}
      <CollapsibleBox title="Experience">
        <InfoBox>
          <div className="space-y-6">
            {/* NAIT Role*/}
            <div>      
              <h3 className="text-xl font-semibold mb-1">Embedded Systems Research Assistant (Casual)</h3>
              <p className="text-sm text-gray-700 mb-2">NAIT · Feb 2025 – Present</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base flex flex-col gap-4">
                <li>Developed wildfire monitoring system for remote communities. Successfully deployed for continous data collection.</li>
                <li>
                  Designed and implemented firmware for Espressif microcontrollers (C/C++, FreeRTOS) with Wi-Fi/Cellular and cloud connectivity (MQTT, AWS IoT Core, DynamoDB). 
                </li>
                <li>
                  Designed PCB containing analog and digital signals with components like differential OP amps, unity gain buffers, and voltage regulators.
                </li>
                <li>
                  Prototyped initial version through breadboarding, and a protoboard that was hand-soldered.
                  </li>
                <li>
                  Integrated sensors and devices via RS-232, RS-485 (Modbus RTU), UART, SPI, I²C, and SDIO for environmental monitoring and backup data storage. 
                </li>
                <li>
                  Developed Python scripts to generate mock sensor data for validating AWS SNS notifications, triggered automatically via EventBridge schedules 
                  leveraging DynamoDB and Lambda.
                </li>
                <li>
                  Recommended and transitioned the system from an ESP-based MCU to a Teensy 4.1, providing more I/O capability and simplifying the design as 
                  the project evolved toward a non-Wi-Fi, safety-critical configuration.
                </li>
                <li>
                  Created an initial local PostgreSQL database and web UI (JavaScript, HTML, CSS, Node.js) for rapid testing, 
                  later migrating the platform to a cloud-based architecture (AWS) using React, Tailwind, and TypeScript for the production dashboard.
                </li>
              </ul>
            </div>

              {/* Automation Role*/}
            <div>
              <h3 className="gap-4 text-xl font-semibold mb-1">Freelance Web Automation Developer</h3>
              <p className="text-sm text-gray-700 mb-2">June 2025 – September 2025</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base flex flex-col gap-4">
                <li>
                  Developed Python automation scripts to post vehicle advertisements from car dealership websites, eliminating manual posting overhead.
                </li>
                <li>
                  Implemented system with various dealerships such as Revolution RV and Auto and West Edmonton Hyundai.
                </li>
                <li>
                  Eliminated hundreds of hours in manual posting to allow salespeople to focus on customer relations.
                </li>
                <li>
                  Utilized Selenium for browser automation and web scraping. Used MySQL to track postings and avoid duplicate listings.
                </li>
              </ul>
            </div>

          </div>
        </InfoBox>
      </CollapsibleBox>

      {/* Skills Box*/}
      <CollapsibleBox title="Skills">

        {/* Firmware & IoT*/}
        <InfoBox>
          <h3 className="text-xl font-semibold mb-1">Firmware & IoT</h3>
          <div>
            <SkillsTag skillName="C/C++" />
            <SkillsTag skillName="FreeRTOS" />
            <SkillsTag skillName="MQTT" />
            <SkillsTag skillName="OTA Updates" />
            <SkillsTag skillName="AWS IoT Core" />
          </div>

          {/* Hardware */}
          <h3 className="text-xl font-semibold mb-1">Hardware</h3>
          <div>
            <SkillsTag skillName="PCB Design (KiCad)" />
            <SkillsTag skillName="Soldering" />
            <SkillsTag skillName="Prototyping" />
            <SkillsTag skillName="Datasheets & Schematics" />
            <SkillsTag skillName="Oscilloscope" />
            <SkillsTag skillName="Logic Analyzer" />
            <SkillsTag skillName="Multimeter" />
          </div>

          {/* Protocols & Integration*/}
          <h3 className="text-xl font-semibold mb-1">Protocols & Integration</h3>
          <div>
            <SkillsTag skillName="UART" />
            <SkillsTag skillName="SPI" />
            <SkillsTag skillName="I²C" />
            <SkillsTag skillName="RS-232" />
            <SkillsTag skillName="RS-485 (Modbus RTU)" />
            <SkillsTag skillName="ADC/DAC" />
            <SkillsTag skillName="GPIO" />
          </div>

          {/* Tools & Environments */}
          <h3 className="text-xl font-semibold mb-1">Tools & Environments</h3>
          <div>
            <SkillsTag skillName="Git" />
            <SkillsTag skillName="VSCode" />
            <SkillsTag skillName="Linux" />
            <SkillsTag skillName="Arduino" />
            <SkillsTag skillName="ESP-IDF" />
            <SkillsTag skillName="VSCode" />
            <SkillsTag skillName="STM32CubeIDE" />
            <SkillsTag skillName="Makefile" />
            <SkillsTag skillName="Unity (C Unit Testing)" />
          </div>

          {/* Databases*/}
          <h3 className="text-xl font-semibold mb-1">Databases</h3>
          <div>
            <SkillsTag skillName="DynamoDB" />
            <SkillsTag skillName="PostgreSQL" />
            <SkillsTag skillName="MySQL" />
            <SkillsTag skillName="SQL" />
            <SkillsTag skillName="NoSQL" />
          </div>

          {/* Scripting & Automation */}
          <h3 className="text-xl font-semibold mb-1">Scripting & Automation</h3>
          <div>
            <SkillsTag skillName="Python"></SkillsTag>
            <SkillsTag skillName="Selenium"></SkillsTag>
          </div>

          {/* Web Dev*/}
          <h3 className="text-xl font-semibold mb-1">Web Dev</h3>
          <div>
            <SkillsTag skillName="React"></SkillsTag>
            <SkillsTag skillName="Tailwind"></SkillsTag>
            <SkillsTag skillName="TS"></SkillsTag>
            <SkillsTag skillName="JS"></SkillsTag>
            <SkillsTag skillName="HTML/CSS"></SkillsTag>
            <SkillsTag skillName="Node.js"></SkillsTag>
            <SkillsTag skillName="Vite"></SkillsTag>
          </div>
        
        </InfoBox>
        
      </CollapsibleBox>
    </div>

  );
}
