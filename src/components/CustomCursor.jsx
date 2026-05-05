import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const isClickable = target.closest('a, button, .portfolio-item, .filter-btn, input, textarea, select');
      setExpand(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div 
        className={`cursor ${expand ? 'expand' : ''}`} 
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }} 
      />
      <div 
        className={`cursor-ring ${expand ? 'expand' : ''}`} 
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }} 
      />
    </>
  );
}
