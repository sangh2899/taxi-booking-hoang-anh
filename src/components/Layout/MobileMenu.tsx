'use client';

import { useEffect } from 'react';

export default function MobileMenu() {
  useEffect(() => {
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    const toggleMenu = () => {
      menu?.classList.toggle('hidden');
    };

    btn?.addEventListener('click', toggleMenu);

    return () => {
      btn?.removeEventListener('click', toggleMenu);
    };
  }, []);

  return null;
} 