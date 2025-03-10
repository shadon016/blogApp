import Logo from "@/components/logo.jsx";

const Footers = () => {
  return (
    <div className="wrapper">
      <Logo />
      <p className="text-center text-sm leading-loose md:text-left">
        Built by{" "}
        <a
          href="#"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          shadcn
        </a>
        . Hosted on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Vercel
        </a>
        . Illustrations by{" "}
        <a
          href="https://popsy.co"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Popsy
        </a>
        . The source code is available on{" "}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default Footers;
