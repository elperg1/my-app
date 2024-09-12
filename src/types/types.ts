// src/types/types.ts

export interface User {
    id: number;
    name: string;
    username: string;
  }
  
  export interface Post {
    id: number;
    userId: number;
    content: string;
  }
  
  export interface Comment {
    id: number;
    postId: number;
    userId: number;
    content: string;
  }
  