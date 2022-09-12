import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { My0DemoAppApp } from './app';

export const My0DemoAppBasic = () => {
  return (
    <MemoryRouter>
      <My0DemoAppApp />
    </MemoryRouter>
  );
};
