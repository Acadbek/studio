export const useToTop = (number) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return toTop;
};

export default useToTop;
