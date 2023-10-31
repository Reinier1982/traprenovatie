import Image from "next/image";

interface boardInterface {
  id: number;
  src: string;
  name: string;
  className?: string;
}

interface boardProps {
  data: boardInterface;
}

const Board = ({ data }: boardProps) => {
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

export default Board;
