type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};


export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";


  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} px-6 py-3 rounded-lg font-bold transition`}
    >
      {children}
    </button>
  );
}
