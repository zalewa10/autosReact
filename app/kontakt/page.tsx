import KontaktForm from "@/components/elements/KontaktForm";
import KontaktInfo from "@/components/elements/KontaktInfo";
import { Toaster } from "@/components/ui/toaster";

const Kontakt = () => {
  return (
    <section className="bg-secondary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex mb-5 mx-auto flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/2">
            <KontaktInfo />
          </div>
          <div className="md:w-1/2">
            <KontaktForm />
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
};

export default Kontakt;
