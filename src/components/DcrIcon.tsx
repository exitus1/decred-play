import dcrSymbol from "@/assets/dcr-symbol.png";

interface DcrIconProps {
  className?: string;
  size?: number;
}

const DcrIcon = ({ className = "", size = 32 }: DcrIconProps) => {
  return (
    <img
      src={dcrSymbol}
      alt="DCR"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default DcrIcon;
