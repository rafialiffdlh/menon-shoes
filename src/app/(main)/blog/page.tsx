import { BlogCategories } from "@/components/blog/blogCategories";
import { BlogGrid } from "@/components/blog/blogGrid";
import { InstagramFeed } from "@/components/blog/instagramFeed";
import { BlogPagination } from "@/components/blog/pagination";
import { TopPosts } from "@/components/blog/topPosts";
import Footer from "@/pages/footer";
import Navbar from "@/pages/navbar";
export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container px-4 mx-auto">
          {/* <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Menon Shoes</h1>
            <p className="text-lg text-muted-foreground">
              Your daily dose of footwear news, reviews, and style guides
            </p>
          </header> */}
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/3 space-y-8">
              <BlogCategories />
              <TopPosts />
              <InstagramFeed />
            </aside>
            <main className="md:w-2/3 space-y-8">
              <BlogGrid />
              <BlogPagination />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
