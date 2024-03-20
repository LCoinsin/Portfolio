/// <reference types="vite/client" />

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { className?: string }>;
    const src: string;
    export default src;
  }