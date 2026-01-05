'use client';

import { useEffect, useRef, useState, memo } from 'react';
import type { Region } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface IndonesiaMapProps {
  regions: Region[];
}

function IndonesiaMapComponent({ regions }: IndonesiaMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamic import of Leaflet (only on client)
    const initMap = async () => {
      const L = (await import('leaflet')).default;

      if (!mapRef.current || mapInstanceRef.current) return;

      // Fix default icon paths for local Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [-2.5, 118],
        zoom: 5,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Handler for region click
      const handleRegionClick = (region: Region) => {
        router.push(`/explore/${region.id}`);
      };

      // Add markers
      regions.forEach((region) => {
        const marker = L.marker(region.coordinates).addTo(map);

        const tooltipContent = `
          <div style="padding: 12px 12px 12px 16px; min-width: 200px; font-family: 'Poppins', sans-serif;">
            <h3 style="font-family: 'Playfair Display', serif; font-weight: bold; font-size: 18px; margin-bottom: 8px; color: #111827;">
              ${region.name}
            </h3>
            <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.5;">
              Klik untuk memulai kuis!
            </p>
            <button
              data-region-id="${region.id}"
              class="region-button"
              style="margin-top: 12px; color: #c2882f; font-size: 14px; font-weight: 600; cursor: pointer; background: none; border: none; padding: 0;"
            >
              Mulai Petualangan →
            </button>
          </div>
        `;

        // Bind tooltip yang muncul saat hover
        marker.bindTooltip(tooltipContent, {
          permanent: false,
          direction: 'top',
          offset: [0, -30],
          className: 'custom-tooltip'
        });

        // Efek hover dengan filter brightness
        marker.on('mouseover', function(this: L.Marker) {
          const icon = this.getElement();
          if (icon) {
            icon.style.filter = 'brightness(1.3) drop-shadow(0 0 8px rgba(194, 136, 47, 0.6))';
            icon.style.transition = 'filter 0.2s ease';
            icon.style.zIndex = '1000';
          }
        });

        marker.on('mouseout', function(this: L.Marker) {
          const icon = this.getElement();
          if (icon) {
            icon.style.filter = '';
            icon.style.zIndex = '';
          }
        });

        marker.on('click', () => {
          handleRegionClick(region);
        });

        // Add event listener to tooltip buttons
        marker.on('tooltipopen', () => {
          const button = document.querySelector(`button[data-region-id="${region.id}"]`);
          if (button) {
            button.addEventListener('click', () => handleRegionClick(region));
          }
        });
      });

      // Fit bounds
      if (regions.length > 0) {
        const bounds = regions.map(r => r.coordinates);
        map.fitBounds(bounds as any, { padding: [50, 50] });
      }

      mapInstanceRef.current = map;
      setMapLoaded(true);
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [regions, router]);

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border border-border">
      <div
        ref={mapRef}
        className="w-full h-full bg-muted relative"
      >
        {!mapLoaded && (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-muted z-20">
            <div className="text-center text-muted-foreground">
              <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-sm sm:text-base font-medium">Memuat Peta Indonesia...</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2">Mohon tunggu sebentar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(IndonesiaMapComponent);
