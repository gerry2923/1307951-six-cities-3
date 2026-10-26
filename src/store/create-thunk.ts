import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra : AxiosInstance;
}>();
