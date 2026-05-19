type Writing = { title: string; href: string; date: string };

const writings: Writing[] = [
  { title: "NYPD Continues to Dodge Surveillance Transparency Laws", href: "https://www.brennancenter.org/our-work/analysis-opinion/nypd-continues-dodge-surveillance-transparency-laws", date: "06/12" },
  { title: "The Nuts and Bolts of Enforcing AI Guardrails", href: "https://www.brennancenter.org/our-work/analysis-opinion/nuts-and-bolts-enforcing-ai-guardrails-0", date: "05/30" },
  { title: "Records Show DC and Federal Law Enforcement Sharing Surveillance Info on Racial Justice Protests", href: "https://www.brennancenter.org/our-work/analysis-opinion/records-show-dc-and-federal-law-enforcement-sharing-surveillance-info", date: "05/15" },
  { title: "Documents Reveal How DC Police Surveil Social Media Profiles and Protest Activity", href: "https://www.brennancenter.org/our-work/analysis-opinion/documents-reveal-how-dc-police-surveil-social-media-profiles-and-protest", date: "04/30" },
  { title: "New York City Must Strengthen Police Transparency Law", href: "https://www.brennancenter.org/our-work/analysis-opinion/new-york-city-must-strengthen-police-transparency-law", date: "12/15" },
  { title: "NYPD Surveillance Needs Oversight", href: "https://www.brennancenter.org/our-work/analysis-opinion/nypd-surveillance-needs-oversight-0", date: "12/14" },
  { title: "The Perils and Promise of AI Regulation", href: "https://www.brennancenter.org/our-work/analysis-opinion/perils-and-promise-ai-regulation", date: "07/26" },
  { title: "The NYPD Inspector General Needs Shoring Up", href: "https://www.brennancenter.org/our-work/analysis-opinion/nypd-inspector-general-needs-shoring", date: "05/10" },
  { title: "Reviving the NYPD Inspector General", href: "https://www.brennancenter.org/our-work/research-reports/reviving-nypd-inspector-general", date: "04/25" },
];

type Education = {
  logo: string;
  alt: string;
  school: string;
  degree: string;
  years: string;
  bordered?: boolean;
};

const education: Education[] = [
  {
    logo: "/images/berkeleylaw_logo.jpeg",
    alt: "UC Berkeley Law",
    school: "University of California, Berkeley — School of Law",
    degree: "Juris Doctor",
    years: "2018 – 2021",
  },
  {
    logo: "/images/university_of_oklahoma_logo.jpeg",
    alt: "University of Oklahoma",
    school: "University of Oklahoma",
    degree: "Bachelor's Degree, International Development",
    years: "2014 – 2017",
    bordered: true,
  },
  {
    logo: "/images/london_school_of_economics_logo.jpeg",
    alt: "LSE",
    school: "The London School of Economics and Political Science (LSE)",
    degree: "International Relations, Summer School",
    years: "2017",
  },
];

const tints = ["tint-iv", "tint-ve", "tint-ey"] as const;

function handleAvatarMove(e: React.MouseEvent<HTMLSpanElement>) {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  const angle = Math.atan2(y - 50, x - 50) * (180 / Math.PI) + 180;
  target.style.setProperty("--mx", `${x}%`);
  target.style.setProperty("--my", `${y}%`);
  target.style.setProperty("--ang", `${angle}deg`);
}

const bioLinkClass = "underline underline-offset-2 transition-colors hover:text-purple-800";
const listLinkClass = "text-gray-700 text-15 no-underline underline-offset-2 transition-colors hover:text-purple-800 hover:underline";

export default function App() {
  return (
    <main className="mx-auto max-w-[600px] px-6 pt-16 pb-24">
      <header className="group relative mb-10 cursor-pointer">
        <div className="group-hover:invisible">
          <span className="block text-15 font-medium text-gray-800">Ivey Dyson</span>
          <p className="text-sm text-gray-400">Updated {__BUILD_DATE__}</p>
        </div>
        <div className="absolute left-0 top-0 hidden items-center group-hover:flex">
          {tints.map((tint) => (
            <span
              key={tint}
              onMouseMove={handleAvatarMove}
              className={`avatar-wrap ${tint} relative inline-block h-[44px] w-[44px] overflow-hidden rounded-full`}
            >
              <img
                src="/images/ivey-avatar.jpeg"
                alt="Ivey Dyson"
                className="block h-full w-full rounded-full object-cover transition-[filter] duration-300 hover:saturate-150 hover:contrast-[1.05]"
              />
            </span>
          ))}
        </div>
      </header>

      <div className="mb-12 flex flex-col gap-4 text-15 text-gray-800">
        <p>
          Ivey Dyson is an associate at{" "}
          <a className={bioLinkClass} href="https://www.wsgr.com" target="_blank" rel="noreferrer">
            Wilson Sonsini Goodrich &amp; Rosati
          </a>
          , where she focuses on AI tech law, internet strategy, and litigation.
        </p>
        <p>
          Previously, she was counsel in the{" "}
          <a className={bioLinkClass} href="https://www.brennancenter.org/experts/ivey-dyson" target="_blank" rel="noreferrer">
            Brennan Center for Justice
          </a>
          's Liberty and National Security Program, focusing on surveillance, policing, and AI
          regulation. Before that, she worked on migrant human rights issues at{" "}
          <a className={bioLinkClass} href="https://equal-rights.org" target="_blank" rel="noreferrer">
            Equal Rights Beyond Borders
          </a>
          .
        </p>
        <p>
          She holds a JD from{" "}
          <a className={bioLinkClass} href="https://www.law.berkeley.edu" target="_blank" rel="noreferrer">
            UC Berkeley School of Law
          </a>
          , a BA in International Development from the{" "}
          <a className={bioLinkClass} href="https://www.ou.edu" target="_blank" rel="noreferrer">
            University of Oklahoma
          </a>
          , and studied International Relations at the{" "}
          <a className={bioLinkClass} href="https://www.lse.ac.uk" target="_blank" rel="noreferrer">
            London School of Economics
          </a>
          .
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-xs uppercase tracking-[0.08em] text-gray-400">Writing</h2>
        <ul className="flex list-none flex-col gap-[0.4rem]">
          {writings.map((w) => (
            <li key={w.href} className="flex items-baseline justify-between max-[600px]:gap-3">
              <span className="max-[600px]:block max-[600px]:min-w-0 max-[600px]:flex-1 max-[600px]:overflow-hidden max-[600px]:text-ellipsis max-[600px]:whitespace-nowrap">
                <a className={listLinkClass} href={w.href} target="_blank" rel="noreferrer">
                  {w.title}
                </a>
              </span>
              <span className="ml-4 shrink-0 text-xs text-gray-400">{w.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xs uppercase tracking-[0.08em] text-gray-400">Press</h2>
        <div className="flex flex-col gap-2 text-15 text-gray-800">
          <p>Published in Just Security, City &amp; State New York, the New York Daily News, and Univision.</p>
          <p>Featured in Bloomberg Law, Puck News, and StateScoop.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xs uppercase tracking-[0.08em] text-gray-400">Education</h2>
        <ul className="flex list-none flex-col gap-4">
          {education.map((e) => (
            <li key={e.school} className="flex items-start gap-3">
              <img
                className={`h-12 w-12 shrink-0 rounded-xl bg-[#f5f5f5] object-contain${e.bordered ? " border border-gray-200" : ""}`}
                src={e.logo}
                alt={e.alt}
              />
              <div className="flex flex-col gap-[0.1rem]">
                <span className="text-15 font-medium text-gray-800">{e.school}</span>
                <span className="text-15 text-gray-600">{e.degree}</span>
                <span className="text-xs text-gray-400">{e.years}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 flex items-center justify-between text-xs text-gray-400">
        <span>© 2026 Ivey Dyson</span>
        <a className="transition-colors hover:text-purple-800" href="mailto:iveydyson@gmail.com">
          iveydyson@gmail.com
        </a>
      </footer>
    </main>
  );
}
