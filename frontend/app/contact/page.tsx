import ContactStepper from "../../components/ContactStepper";
import Reveal from "../../components/Reveal";
import { wrap } from "../../components/ui";

export const metadata = { title: "Describe your idea — Hyperion Studio" };

export default function ContactPage() {
  return (
    <div className={`${wrap} py-14 pb-24`}>
      <Reveal>
        <h1 className="mb-14 pt-0 text-[clamp(3rem,8vw,4.6rem)] leading-[1.05] tracking-[-0.01em]">
          Describe your <em>idea</em>
        </h1>
      </Reveal>
      <ContactStepper />
    </div>
  );
}
