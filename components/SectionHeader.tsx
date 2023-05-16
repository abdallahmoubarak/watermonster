export interface SectionHeaderProps {
  text: string;
}

export default function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <h1 className="text-2xl sm:text-4xl font-bold tracking-wide text-primary px-2 pb-6 text-center ">
      {text}
    </h1>
  );
}
