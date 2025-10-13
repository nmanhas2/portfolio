interface SkillsTagProps {
    skillName: string;
}

export default function SkillsTag({skillName}: SkillsTagProps) {
  return (
    <div className="border-4">
      {skillName}
    </div>
  )
}
