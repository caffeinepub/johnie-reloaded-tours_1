export function usePdfDownload() {
  const download = () => {
    window.print();
  };

  return { download, loading: false };
}
