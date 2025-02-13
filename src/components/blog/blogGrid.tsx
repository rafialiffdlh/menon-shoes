import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "The Ultimate Guide to Running Shoes",
    excerpt:
      "Find the perfect running shoes for your training needs with our comprehensive guide.",
    image: "/image/running.jpg",
    category: "Running",
    tags: ["Sports"],
    date: "MAR 20, 2024",
  },
  {
    id: 2,
    title: "Trending Sneakers for Spring 2024",
    excerpt:
      "Discover the hottest sneaker trends that will dominate the streets this spring season.",
    image: "/image/sneakers.jpg",
    category: "Fashion",
    tags: ["Trends"],
    date: "MAR 19, 2024",
  },
  {
    id: 3,
    title: "How to Care for Leather Shoes",
    excerpt:
      "Learn essential tips and tricks to maintain and extend the life of your leather footwear.",
    image: "/image/leather.jpg",
    category: "Care",
    tags: ["Maintenance"],
    date: "MAR 18, 2024",
  },
  {
    id: 4,
    title: "Best Basketball Shoes of 2024",
    excerpt:
      "Top picks for basketball shoes that offer performance, comfort, and style on the court.",
    image: "/image/basketball.jpg",
    category: "Sports",
    tags: ["Basketball"],
    date: "MAR 17, 2024",
  },
  {
    id: 5,
    title: "Sustainable Footwear Brands",
    excerpt:
      "Eco-friendly shoe brands that are leading the way in sustainable fashion.",
    image: "/image/Sustainable Footwear.jpg",
    category: "Sustainability",
    tags: ["Eco-friendly"],
    date: "MAR 16, 2024",
  },
  {
    id: 6,
    title: "Classic Dress Shoes Guide",
    excerpt:
      "Everything you need to know about timeless dress shoes for formal occasions.",
    image: "/image/Classic Dress Shoes Guide.jpg",
    category: "Formal",
    tags: ["Classic"],
    date: "MAR 15, 2024",
  },
];

export const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="secondary">{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
              <span className="text-sm text-muted-foreground ml-auto">
                {post.date}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2 hover:text-primary cursor-pointer">
              {post.title}
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
