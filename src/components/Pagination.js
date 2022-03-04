import React from 'react';
import Paginator from './Paginator';

export default function Pagination() {
  return (
    <nav>
      <Paginator value={1} />
      <Paginator value={2} />
      <Paginator value={3} />
      <Paginator value={4} />
      <Paginator value={5} />
    </nav>
  );
}
