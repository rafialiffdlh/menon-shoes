const instagramPosts = [
  "/image/post1.jpg",
  "/image/post2.jpg",
  "/image/post3.jpg",
  "/image/post4.jpg",
  "/image/post5.jpg",
  "/image/post6.jpg",
];

export const InstagramFeed = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Instagram</h2>
      <div className="grid grid-cols-3 gap-2">
        {instagramPosts.map((post, index) => (
          <img
            key={index}
            src={post}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-90 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};
