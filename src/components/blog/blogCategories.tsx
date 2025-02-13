import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Running", count: 15 },
  { name: "Sneakers", count: 12 },
  { name: "Basketball", count: 8 },
  { name: "Formal", count: 10 },
  { name: "Casual", count: 14 },
  { name: "Sports", count: 9 },
  { name: "Trends", count: 9 },
  { name: "Hiking", count: 19 },
  { name: "Safety", count: 6 },
];

export const BlogCategories = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between py-2 border-b"
          >
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              {category.name}
            </a>
            <Badge variant="secondary">{category.count}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
