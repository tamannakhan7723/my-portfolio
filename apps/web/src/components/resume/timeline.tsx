import IconTitle from "./icon-title";
import TimelineList from "./timeline-list";
import type { ProfessionalExperience } from "@/types/resume";
import type { Education } from "@/types/resume";

interface TimeLineProps {
  data: ProfessionalExperience | Education ;
}

function TimeLine({ data }: TimeLineProps) {
  if (!data) return null;
  const { icon , title , items} = data;

  return (
    <section className="timeline">
      <IconTitle icon={icon} title={title} />
      <TimelineList items={items} />
    </section>
  );
}

export default TimeLine;
