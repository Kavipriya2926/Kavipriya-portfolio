import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-fit items-start justify-start"
      id={id}
    >
      <ConstraintedBox classNames="p-4 pb-12 w-full">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-8 w-full items-center">
          <GridBox classNames="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-4xl mx-auto gap-4">
            {socialLinks.map((link, index) => (
              <SocialButton
                key={`social-link-${index}`}
                text={link.text}
                icon={link.icon}
                url={link.url}
              />
            ))}
          </GridBox>

          <p className="text-center mx-auto mt-8 mb-4 text-2xl/6 font-semibold">
            I&apos;m{" "}
            <span className="text-[var(--primaryColor)]">available</span> for
            freelancing.
          </p>
        </Column>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;