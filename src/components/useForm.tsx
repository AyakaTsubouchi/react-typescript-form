import React from 'react';

export default function useForm(callback: any) {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  }
  return {
    onSubmit,
  }
}
