import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6 p-4">
      {/* Avatar Skeleton */}
      <motion.div 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
        className="w-32 h-32 rounded-full bg-gray-800"
      />
      
      {/* Title Skeleton */}
      <motion.div 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", delay: 0.2 }}
        className="h-8 w-64 bg-gray-800 rounded-md"
      />
      
      {/* Subtitle Skeleton */}
      <motion.div 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", delay: 0.4 }}
        className="h-4 w-48 bg-gray-800 rounded-md"
      />

      {/* Cards Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", delay: 0.2 * i }}
            className="h-48 bg-gray-800 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
