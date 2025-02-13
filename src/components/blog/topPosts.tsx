const topPosts = [
  {
    id: 1,
    title: "10 Best Running Shoes for Marathon Training",
    category: "Running",
    date: "MAR 20, 2024",
  },
  {
    id: 2,
    title: "How to Style Your Sneakers for Any Occasion",
    category: "Fashion",
    date: "MAR 19, 2024",
  },
  {
    id: 3,
    title: "The Rise of Sustainable Footwear",
    category: "Sustainability",
    date: "MAR 18, 2024",
  },
  {
    id: 4,
    title: "Essential Basketball Shoes for Pro Performance",
    category: "Sports",
    date: "MAR 17, 2024",
  },
  {
    id: 5,
    title: "Guide to Caring for Premium Leather Shoes",
    category: "Care",
    date: "MAR 16, 2024",
  },
];

export const TopPosts = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Top Posts</h2>
      <div className="space-y-4">
        {topPosts.map((post) => (
          <div key={post.id} className="flex gap-3">
            <span className="text-3xl font-bold text-muted-foreground">
              {post.id}
            </span>
            <div className="space-y-1">
              <h3 className="font-medium line-clamp-2 hover:text-primary cursor-pointer">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {post.category} • {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
