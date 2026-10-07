'use client';

import React from 'react';
import DepthCarousel from '@/components/ui/DepthCarousel';

// ─── Types ────────────────────────────────────────────────────────────────────
interface MenuItem {
  image: string;
  alt: string;
}

interface MenuShowcaseProps {
  /** Override the default Paper & Pie menu items */
  items?: MenuItem[];
  /** Container height in px (default 480) */
  height?: number;
  /** Section eyebrow label */
  eyebrow?: string;
  /** Section heading */
  heading?: string;
  /** Section sub-description */
  description?: string;
}

// ─── Default Paper & Pie Menu Items ───────────────────────────────────────────
const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { image: '/assets/apple_pie.jpg',         alt: 'Classic Apple Pie — ₹340'        },
  { image: '/assets/chocolate_ganache.jpg', alt: 'Chocolate Ganache Tart — ₹360'   },
  { image: '/assets/lemon_meringue.jpg',    alt: 'Lemon Meringue — ₹320'           },
  { image: '/assets/pecan_pie.jpg',         alt: 'Pecan Pie — ₹380'               },
  { image: '/assets/cappuccino.jpg',        alt: 'Artisan Cappuccino — ₹240'       },
  { image: '/assets/cold_brew.jpg',         alt: '16h Cold Brew — ₹260'           },
  { image: '/assets/croissant.jpg',         alt: 'Flaky Croissant — ₹210'         },
  { image: '/assets/avocado_toast.jpg',     alt: 'Avocado Toast — ₹350'           },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function MenuShowcase({
  items = DEFAULT_MENU_ITEMS,
  height = 480,
  eyebrow = '✦ Interactive 3D Showcase',
  heading = "Chef's Signature Selections",
  description = 'Drag, scroll, or use arrows to explore our handcrafted menu in 3D.',
}: MenuShowcaseProps) {
  return (
    <section className="menu-showcase" aria-labelledby="menu-showcase-heading">
      {/* Header */}
      <div className="menu-showcase__header">
        <span className="menu-showcase__eyebrow">{eyebrow}</span>
        <h3 id="menu-showcase-heading" className="menu-showcase__heading">
          {heading}
        </h3>
        <p className="menu-showcase__description">{description}</p>
      </div>

      {/* 3D Depth Carousel */}
      <div style={{ height: `${height}px`, position: 'relative' }}>
        <DepthCarousel
          items={items}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection="right"
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={6}
          autoplay
          autoplayDelay={3200}
          loop
        />
      </div>
    </section>
  );
}
