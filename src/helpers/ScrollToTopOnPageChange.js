import { useEffect } from "react";

export default function ScrollToTopOnPageChange({ page }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return null;
}
