import { useRouter } from "next/router";
import SectionButton from "./UI/SectionButton";

const Hero = () => {
  const router = useRouter();
  const navigateToPositionsPage = () => router.push("/positions");
  const navigateToSubmissionsPage = () => router.push("/submissions");
  const navigateToGuardsPage = () => router.push("/guards");
  const navigateToAboutPage = () => router.push("/about");
  const textStyleClasses =
    "w-6/6 mb-5 text-6xl leading-normal text-white md:text-7xl md:leading-relaxed md:w-5/6 xl:w-4/6 ";

  return (
    <div className="min-h-screen">
      <h1 className={`${textStyleClasses}`}>
        A Brazilian Jiu-Jitsu Resource Page
      </h1>
      <span className="flex flex-col items-start justify-start flex-wrap md:flex-row">
        <SectionButton
          navigateTo={navigateToGuardsPage}
          pageName={"Guards"}
          className="border-blue-500 text-blue-500 hover:bg-blue-50 mt-3 md:mr-7 md:mt-0"
        />
        <SectionButton
          navigateTo={navigateToPositionsPage}
          pageName={"Positions"}
          className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 mt-0 md:mr-7 sm:mt-0"
        />
        <SectionButton
          navigateTo={navigateToSubmissionsPage}
          pageName={"Submissions"}
          className="border-purple-500 text-purple-500 hover:bg-purple-50 mt-3 md:mr-7 md:mt-0"
        />
      </span>
    </div>
  );
};

export default Hero;
