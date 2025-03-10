import Content from "@/components/content.jsx";
import RecentContent from "@/components/recentContent.jsx";
import TopPosts from "@/components/topPosts.jsx";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="flex-3/4">
          <Content />
        </div>
        <div className="flex-1/4">
          <RecentContent />
        </div>
      </div>
      <TopPosts />
    </div>
  );
}
