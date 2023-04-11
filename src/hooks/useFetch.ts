import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleError = (reason: any) => {
    if (reason instanceof DOMException && reason.name !== 'AbortError') {
      setError(reason);
      setLoading(false);
    }
  };

  const handleResponse = (response: Response) => {
    response
      .clone()
      .json()
      .then((parsed) => {
        setResponse(parsed);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!url) {
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(handleResponse)
      .catch(handleError);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, response, error };
}
