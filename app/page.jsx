import SectionHeader from "./sections/SectionHeader";
import SectionTop from "./sections/SectionTop";
import SectionWork from "./sections/SectionWork";
import SectionPractice from "./sections/SectionPractice";
import SectionStatement from "./sections/SectionStatement";
import SectionNotes from "./sections/SectionNotes";
import SectionContact from "./sections/SectionContact";
import SectionDuo from "./sections/SectionDuo";
import SectionWide from "./sections/SectionWide";
import SectionFooter from "./sections/SectionFooter";

export default function FgHomePage() {
  return (
    <>
      <SectionHeader />
      <main>
        <SectionTop />
        <SectionWork />
        <SectionPractice />
        <SectionStatement />
        <SectionNotes />
        <SectionContact />
        <SectionDuo />
        <SectionWide />
      </main>
      <SectionFooter />
    </>
  );
}
