import InstallSuccess from "@/installation/InstallSuccess";
import DarkPageWrapper from "@/components/wrapper/DarkPageWrapper";
import RowWrapper from "@/components/wrapper/RowWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

export default function Home() {
  return (
    <DarkPageWrapper>
      <SectionWrapper>
        <RowWrapper>
          <InstallSuccess />
        </RowWrapper>
      </SectionWrapper>
    </DarkPageWrapper>
  );
}
