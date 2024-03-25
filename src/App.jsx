export default function App() {
  useEffect(() => {
    return () => {
      localStorage.removeItem("SEARCH_IMAGE_RESULTS");
    };
  });
}
