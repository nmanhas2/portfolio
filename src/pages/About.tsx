import CollapsibleBox from "../components/CollapsibleBox"
import SkillsTag from "../components/SkillsTag"
import InfoBox from "../components/InfoBox";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-[#FFC2E5] px-4 gap-10 py-10 min-h-screen">

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
                <li>Developed firmware for Espressif microcontrollers (C/C++, FreeRTOS) with cloud connectivity (MQTT, AWS IoT Core, DynamoDB, etc). </li>
                <li>Designed PCB containing analog and digital signals with components like differential OP amps, unity gain buffers, and voltage regulators.</li>
                <li>Prototyped initial version through breadboarding, and a protoboard that was hand-soldered.</li>
                <li>Integrated sensors and devices via RS-232, RS-485 (Modbus RTU), UART, SPI, I²C, and SDIO for environmental monitoring and local data storage. </li>
                <li>
                    Implemented Python scripting for generating mock sensor data to validate SNS notifications. This was triggered through an EventBridge schedule 
                    based on a combination of DynamoDB tables and Lambda functions.
                </li>
                <li>
                    Built local PostgreSQL database and web UI (JS, HTML, CSS, Node.js) for initial testing. Quickly learning and migrating to React, Tailwind, 
                    and TypeScript for later versions.
                </li>
              </ul>
            </div>

              {/* Automation Role*/}
            <div>
              <h3 className="gap-4 text-xl font-semibold mb-1">Freelance Web Automation Developer</h3>
              <p className="text-sm text-gray-700 mb-2">June 2025 – September 2025</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base flex flex-col gap-4">
                <li>Developed Python automation scripts to post vehicle advertisements from car dealership websites, eliminating manual posting overhead.</li>
                <li>Implemented system with various dealerships such as Revolution RV and Auto and West Edmonton Hyundai.</li>
                <li>Eliminated hundreds of hours in manual posting to allow salespeople to focus on customer relations.</li>
                <li>Utilized Selenium for browser automation and web scraping. Used MySQL to track postings and avoid duplicate listings.</li>
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
