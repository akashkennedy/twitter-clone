interface ButtonProps {
  type?: "filled" | "outline";
  text: string;
  img?: string;
  className?: string;
}
const Button = ({ type, text, img, className }: ButtonProps) => {
  return (
    <button
      className={`${className} ${type == "filled" ? "bg-twitter-blue text-white" : "bg-white border"} min-w-full py-2 rounded-full my-2 `}
    >
      <img src={img} className="inline size-6 mr-2" />
      <p className="font-semibold inline">{text}</p>
    </button>
  );
};

export default Button;
