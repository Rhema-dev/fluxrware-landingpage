import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Posts = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col items-center gap-12 md:flex-row"
      >
        <div className="w-full space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            {posts[0].frontmatter.title}
          </h2>
          <p className="leading-relaxed text-gray-600">
            {posts[0].frontmatter.description}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          {posts[0].frontmatter.image && (
            <Image
              className="w-full rounded-lg object-cover"
              src={posts[0].frontmatter.image}
              alt={posts[0].frontmatter.title}
              width={600}
              height={400}
              priority={true}
            />
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post, i) => (
          <motion.div
            key={`key-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col"
          >
            {post.frontmatter.image && (
              <Image
                className="h-64 w-full rounded-lg object-cover"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={500}
                height={300}
              />
            )}
            <div className="mt-4 flex flex-grow flex-col">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                {post.frontmatter.title}
              </h2>
              <p className="mb-4 flex-grow text-gray-600">
                {post.frontmatter.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
