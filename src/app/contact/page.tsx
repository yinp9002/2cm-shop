import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "These details are placeholders for the demo, so the page looks complete. They are not real 2CM contacts.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <header className="max-w-3xl">
        <h1 className="font-heading text-5xl tracking-tight md:text-6xl">Contact 2CM</h1>
        <p className="mt-4 text-lg leading-relaxed">
          These details are placeholders for the demo, so the page looks complete. They are not real
          2CM contacts.
        </p>
      </header>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <ContactDetails className="rounded-[1.6rem] bg-card p-6 md:p-8" />
        <div className="rounded-[1.6rem] border border-border bg-[#fff8ee] p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
