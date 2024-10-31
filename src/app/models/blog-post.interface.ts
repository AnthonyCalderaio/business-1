// src/app/blog/blog-post.model.ts
export interface BlogPost {
    id: number;
    title: string;
    author: string;
    content: string;
    date: Date;
    imageUrl?: string;
    blogUrl: string;
  }
  