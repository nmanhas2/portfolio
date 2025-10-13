interface SkillsTagProps {
    skillName: string;
}

export default function SkillsTag({skillName}: SkillsTagProps) {
  return (
        <div className="inline-block border-4 bg-[#2D1E2F] text-[#FDF6FF] px-3 py-1 transition-all duration-300 hover:scale-105 hover:border-[#D8B4E2] hover:cursor-pointer hover:shadow-[0_0_10px_#FDF6FF]">
        {skillName}
        </div>
  );
}
