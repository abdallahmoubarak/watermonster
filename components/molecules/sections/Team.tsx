import React from "react";
import SectionHeader from "../../SectionHeader";
import TeamMember from "../TeamMember";

const teamMembers = [
  {
    name: "Abdallah Moubarak",
    image: "/jpg/abdallah.jpg",
    role: "Founder & CEO",
  },
  {
    name: "Yasser Shkeir",
    image: "/jpg/yasser.jpg",
    role: "Sales & Communication",
  },
  {
    name: "Hadi Darwish",
    image: "/jpg/hadid.jpg",
    role: "Product Developer",
  },
  {
    name: "Maha Khalaf",
    image: "/jpg/maha.jpg",
    role: "Digital Marketing",
  },
  {
    name: "Hussam Kak",
    image: "/jpg/hussam.jpg",
    role: "3D Modeler",
  },
  {
    name: "Ali Haidar",
    image: "/jpg/ali.jpg",
    role: "Software Developer",
  },
  {
    name: "Maya Bittar",
    image: "/jpg/maya.jpg",
    role: "Graphic Designer",
  },
];

export default function TeamMembers() {
  return (
    <div className="py-16">
      <SectionHeader text="Meet the Team" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            image={member.image}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}
