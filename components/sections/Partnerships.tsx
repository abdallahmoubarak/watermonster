import SectionHeader from "../atoms/SectionHeader";

const partners = [
  {
    name: "Talal and Madiha Zein AUB Innovation Park",
    logo: "/jpg/aub.jpg",
    link: "https://sites.aub.edu.lb/ipark/",
  },
  {
    name: "Jusoor",
    logo: "/png/jusoor.png",
    link: "https://www.jusoor.ngo/",
  },
];

export default function Partnerships() {
  return (
    <div className="rounded-xl border border-primary py-4 bg-gray-100">
      <SectionHeader text="Our Partnerships" />
      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((partner, i) => (
          <div key={i}>
            <a href={partner.link} target="_blank" rel="noreferrer">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-36 w-auto object-contain mx-auto rounded-md border border-primary"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
