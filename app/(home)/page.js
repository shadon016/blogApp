import { Button } from "@/components/ui/button.jsx";

export default function Home() {
  return (
    <div className="m-4">
      <h1>this is home page</h1>
      <Button variant="destructive" className="bg-green-400 hover:bg-green-500">
        click
      </Button>
    </div>
  );
}
