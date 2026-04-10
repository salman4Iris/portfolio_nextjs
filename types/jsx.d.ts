// Global JSX type definitions for React
import React from 'react';

declare global {
  namespace JSX {
    type Element = React.ReactElement<any, any>;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
