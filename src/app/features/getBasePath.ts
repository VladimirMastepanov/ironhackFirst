export const getBasePath = () => {
  const depth = window.location.pathname.split('/').filter(Boolean).length - 1;
  return depth > 0 ? '../'.repeat(depth) : './';
};
