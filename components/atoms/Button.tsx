import Loading from "../assets/Loading";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isSecondary?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  title = "button",
  onClick,
  isSecondary,
  isLoading,
  isDisabled,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-full mx-auto block w-fit min-w-[9rem] border   transition-all duration-200 ease-in-out ${
        isDisabled
          ? "text-white bg-gray-400 border-gray-400 hover:bg-gray-400 cursor-not-allowed"
          : isSecondary
          ? "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white cursor-pointer"
          : isLoading
          ? "border-primary bg-primary hover:bg-primary cursor-wait"
          : "border-primary bg-primary text-white hover:bg-primary80 hover:border-primary80 hover:text-darkgray cursor-pointer"
      } `}>
      {isLoading ? (
        <div className="w-6 h-6 mx-auto flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex gap-2 items-center justify-center whitespace-nowrap">
          {icon && <div>{icon}</div>}
          <div>{title}</div>
        </div>
      )}
    </button>
  );
}
