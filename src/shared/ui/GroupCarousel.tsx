import React from 'react';

import { Card } from '@/shared/ui';
import { PathItem } from '../types';
import { useFlow } from '@/app/stackflow';

export default function GroupCarousel({
  label,
  to,
}: {
  label: string;
  to: PathItem;
}) {
  const arr = Array.from({ length: 7 });
  const { push } = useFlow();

  return (
    <div className='flex w-full flex-col gap-y-3'>
      <div className='flex items-baseline justify-between gap-x-2'>
        <span className='text-lg font-semibold'>{label}</span>
        <button
          name='more'
          className='focus;outline-none text-light hover:text-dark cursor-pointer text-sm'
          onClick={() => push(to, { title: label })}
        >
          <u>더보기</u>
        </button>
      </div>
      <div className='scrollbar-hide h-card-height flex items-center gap-x-3 overflow-x-scroll'>
        {arr.map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}
