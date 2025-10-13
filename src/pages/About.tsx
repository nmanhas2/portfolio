import CollapsibleBox from "../components/CollapsibleBox"
import SkillsTag from "../components/SkillsTag"
import InfoBox from "../components/InfoBox";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-[#FFC2E5] px-4 gap-10 py-10 min-h-screen">
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

      <CollapsibleBox title="Experience">
        <InfoBox>
          <div className="space-y-6">
            {/* Role Block */}
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
                    Built local PostgreSQL database and web UI (JS, HTML, CSS, Node.js) for initial testing. Quickly learned and migrated to React, Tailwind, 
                    and TypeScript for later versions.
                </li>
              </ul>
            </div>
          </div>
        </InfoBox>
      </CollapsibleBox>

      <CollapsibleBox title="Skills">
        <InfoBox>
          <h3 className="text-xl font-semibold mb-1">Programming</h3>
          
        </InfoBox>
      </CollapsibleBox>
    </div>

  );
}
