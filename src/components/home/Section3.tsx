import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16 w-full">
          <SectionTitle>Internship</SectionTitle>
        <GridBox
          classNames="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <ExperienceItem key={`experience-${index}`} data={experience} />
          ))}
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;