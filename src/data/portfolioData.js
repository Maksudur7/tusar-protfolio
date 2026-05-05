const generateItems = () => {
  const items = [];
  
  // Photoshop: 10.12.08 series
  // Files: base, (1) to (12)
  items.push({
    id: 'ps-0',
    src: '/images/WhatsApp Image 2026-04-30 at 10.12.08 AM.jpeg',
    category: 'photoshop',
    title: 'Photo Manipulation 1',
    tag: 'Photoshop'
  });
  for (let i = 1; i <= 12; i++) {
    items.push({
      id: `ps-${i}`,
      src: `/images/WhatsApp Image 2026-04-30 at 10.12.08 AM (${i}).jpeg`,
      category: 'photoshop',
      title: `Photo Manipulation ${i + 1}`,
      tag: 'Photoshop'
    });
  }

  // Illustrator: 10.12.09 series
  // Files: base, (1) to (33)
  items.push({
    id: 'il-0',
    src: '/images/WhatsApp Image 2026-04-30 at 10.12.09 AM.jpeg',
    category: 'illustrator',
    title: 'Vector Design 1',
    tag: 'Illustrator'
  });
  for (let i = 1; i <= 33; i++) {
    items.push({
      id: `il-${i}`,
      src: `/images/WhatsApp Image 2026-04-30 at 10.12.09 AM (${i}).jpeg`,
      category: 'illustrator',
      title: `Vector Design ${i + 1}`,
      tag: 'Illustrator'
    });
  }

  // 3D Design: 10.59 series
  // 10.59.55 series: base, (1) to (10)
  items.push({
    id: '3d-55-0',
    src: '/images/WhatsApp Image 2026-04-30 at 10.59.55 AM.jpeg',
    category: '3d',
    title: '3D Render 1',
    tag: '3D Design'
  });
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: `3d-55-${i}`,
      src: `/images/WhatsApp Image 2026-04-30 at 10.59.55 AM (${i}).jpeg`,
      category: '3d',
      title: `3D Render ${i + 1}`,
      tag: '3D Design'
    });
  }

  // 10.59.56 series: base, (1) to (3)
  items.push({
    id: '3d-56-0',
    src: '/images/WhatsApp Image 2026-04-30 at 10.59.56 AM.jpeg',
    category: '3d',
    title: '3D Scene 1',
    tag: '3D Design'
  });
  for (let i = 1; i <= 3; i++) {
    items.push({
      id: `3d-56-${i}`,
      src: `/images/WhatsApp Image 2026-04-30 at 10.59.56 AM (${i}).jpeg`,
      category: '3d',
      title: `3D Scene ${i + 1}`,
      tag: '3D Design'
    });
  }

  // 10.59.57 series: base, (1) to (2)
  items.push({
    id: '3d-57-0',
    src: '/images/WhatsApp Image 2026-04-30 at 10.59.57 AM.jpeg',
    category: '3d',
    title: '3D Artwork 1',
    tag: '3D Design'
  });
  for (let i = 1; i <= 2; i++) {
    items.push({
      id: `3d-57-${i}`,
      src: `/images/WhatsApp Image 2026-04-30 at 10.59.57 AM (${i}).jpeg`,
      category: '3d',
      title: `3D Artwork ${i + 1}`,
      tag: '3D Design'
    });
  }

  // 9.57.28
  items.push({
    id: '3d-extra',
    src: '/images/WhatsApp Image 2026-04-30 at 9.57.28 AM.jpeg',
    category: '3d',
    title: '3D Visual',
    tag: '3D Design'
  });

  return items;
};

export const portfolioItems = generateItems();

export const categories = [
  { key: 'all', label: 'All Works' },
  { key: 'photoshop', label: 'Photoshop' },
  { key: 'illustrator', label: 'Illustrator' },
  { key: '3d', label: '3D Design' },
];
