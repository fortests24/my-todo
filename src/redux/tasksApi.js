import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({  
  reducerPath: 'tasksApi',
  tagTypes: ['Tasks'], 
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => 'tasks',
      providesTags: (result) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Tasks', id })), 'Tasks']
        : ['Tasks'],
    }),
    addTask: build.mutation({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Tasks'] 
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tasks']
    }),
    updateTask: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `tasks/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Tasks']
    })
  })
    
});

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = tasksApi;