// src/services/api.ts

import axios from 'axios';
import { Post, Comment, User } from '../types/types';

const API_URL = 'https://dummyapi.io/data/api'; // Replace with your actual API endpoint

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts`);
  return response.data;
};

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const response = await axios.get<Comment[]>(`${API_URL}/posts/${postId}/comments`);
  return response.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_URL}/users`);
  return response.data;
};
