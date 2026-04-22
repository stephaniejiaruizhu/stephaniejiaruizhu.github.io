import React from "react";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  const initialcolor = localStorage.getItem('mode');
  const root = document.documentElement;
  root.style.setProperty('--background-color', initialcolor === 'dark' ? '#1f2a27' : '#eeeae3');
  root.style.setProperty('--color', initialcolor === 'dark' ? '#eeeae3' : '#1f2a27');
})()
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(<MagicScriptTag />);
};
