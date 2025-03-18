import AddPost from "../../_components/addPost.jsx";
import PostList from "../../_components/postList.jsx";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div>
      <div className="wrapper">
        <div className="flex w-full">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>total blog</CardTitle>
            </CardHeader>
            <CardFooter>
              <p className="text-center w-full">1</p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex">
          <div className="flex-1">
            <AddPost />
          </div>
          <div className="flex-1">
            <PostList />
          </div>
        </div>
      </div>
    </div>
  );
}
