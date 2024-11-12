'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpNextServer } from '@/utils/settings';

const NextApp: React.FC = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => await httpNextServer.get('/api/hello'),
  });

  console.log({
    isLoading,
    data,
    error,
  });

  return (
    <>
      <h1 className="text-red-800">Next.js App Router</h1>
    </>
  );
};

export default NextApp;
