import Link from "next/link";

const Content = () => {
  return (
    <div className="p-4 bg-slate-200">
      <h1>The Rise of AI in Everyday Life</h1>
      <p>
        Artificial Intelligence is becoming more integrated into our daily
        routines. From smart assistants to automated customer service, AI is
        revolutionizing how we interact with technology.
      </p>
      <p className="py-1 mt-4 bg-slate-100 px-4 rounded-lg w-fit">
        <Link href="">continue reading</Link>
      </p>
    </div>
  );
};

export default Content;
