import { contactDetails } from "@/lib/catalog";

const rows = [
  { label: "Email", value: contactDetails.email, href: contactDetails.emailHref },
  { label: "Phone", value: contactDetails.phone, href: contactDetails.phoneHref },
  { label: "WhatsApp", value: contactDetails.whatsapp, href: contactDetails.whatsappHref },
  { label: "Address", value: contactDetails.address },
  { label: "Hours", value: contactDetails.hours },
] as const;

export function ContactDetails({
  className = "",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <dl className={`grid gap-4 ${className}`}>
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
          <dt className={inverted ? "text-[#f4efe4]/70" : "text-muted-foreground"}>{row.label}</dt>
          <dd className="font-medium">
            {"href" in row && row.href ? (
              <a
                href={row.href}
                className="underline-offset-4 hover:underline"
                {...(row.label === "WhatsApp" ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
