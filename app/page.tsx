import Image from "next/image";
import { Button } from "@/components/ui/button"
import PacientForm from "@/components/forms/PacientForm";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src="/assets/icons/logo-full.svg" alt="logo" height={1000} width={1000} className="mb-12 h-10 w-fit"/>

          <PacientForm />
        </div>
      </section>
    </div>
  );
}
