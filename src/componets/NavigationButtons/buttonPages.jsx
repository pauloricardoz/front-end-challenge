import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';

function changePage(e, setActual, lastPage) {
  setActual((actual) => {
    switch (e) {
      case 'Anterior':
        return actual - 1;
      case 'Próxima':
        if (actual === lastPage - 1) return lastPage ;
        return actual + 1;
      default:
        return e;
    }
  });
}

export default function ButtonPages(props) {
  const { text } = props;
  const { setActual, lastPage } = useContext(Context);
  useEffect(() => {
    console.log('');
  }, [lastPage]);
  return (
    <button
      className="buttonPages"
      onClick={() => {
        changePage(text, setActual, lastPage);
      }}
    >
      {text}
    </button>
  );
}
