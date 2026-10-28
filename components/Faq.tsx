import { FiPlus } from "react-icons/fi";
import { faqs } from "@/lib/data";

// <details> is built into the browser, so open/close works without any JavaScript.
export default function Faq() {
  return (
    <div className="space-y-4">
      {faqs.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
            {item.q}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand transition-transform duration-300 group-open:rotate-45">
              <FiPlus aria-hidden />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-navy/85">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
