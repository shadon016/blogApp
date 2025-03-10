import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PostCard = () => {
  return (
    <Card className="w-fit ">
      <CardHeader>
        <CardTitle>card title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>card content</p>
      </CardContent>
      <CardFooter>
        <p>continue reading</p>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
