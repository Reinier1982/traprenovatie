import Image from "next/image";

interface stepInterface {
  id: number;
  src: string;
  name: string;
  className?: string;
}

interface stepProps {
  data: stepInterface;
}

const Step = ({ data }: stepProps) => {
  return (
    <>
      <Image
        src={data.src}
        alt={data.name}
        width={1000}
        height={1000}
        className="absolute left-0 top-0 w-full max-h-[800px]"
      />
    </>
  );
};

export default Step;
