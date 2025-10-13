import CollapsibleBox from "../components/CollapsibleBox"
import SkillsTag from "../components/SkillsTag"
import InfoBox from "../components/InfoBox";

export default function About() {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-[#FFC2E5] px-4 gap-10 p-5">
      <CollapsibleBox title="Education">
        <InfoBox>
          <p>NAIT</p>
        </InfoBox>
      </CollapsibleBox>

      <CollapsibleBox title="Experience">
        <InfoBox>
          <p>NAIT</p>
        </InfoBox>
      </CollapsibleBox>

      <CollapsibleBox title="Skills">
        <InfoBox>
          <p>NAIT</p>
        </InfoBox>
      </CollapsibleBox>

    </div>
  );
}
