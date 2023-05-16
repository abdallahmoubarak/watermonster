import FlatLogo from "../assets/FlatLogo";

interface TopBarProps {
  withImage?: boolean;
  image?: string;
  onClick?: () => void;
}
export default function TopBar({ withImage, image, onClick }: TopBarProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 bg-primary px-4 py-2 h-16">
        <div className="h-full">
          <FlatLogo height={"100%"} isWhite={true} />
        </div>
        {withImage && (
          <div
            className="dark-profile-background w-12 h-12 cursor-pointer rounded-full"
            onClick={onClick}
          >
            <img
              src={image || "../assets/svg/persone-colored.svg"}
              className="w-full h-full rounded-full"
            />
          </div>
        )}
      </div>
    </>
  );
}
