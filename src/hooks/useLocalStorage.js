import { useEffect, useState } from 'react';



function useLocalStorage(localStkey, defaultValue) {

  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(localStkey);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  function setLocalState(newState) {
    setState(newState);
    localStorage.setItem(localStkey, JSON.stringify(newState));
  }

  return [state, setLocalState];
}

export default useLocalStorage;