'use client';

import { useEffect, useState, useRef } from 'react';
import type { Region } from '@/lib/types';
import { Loader2 } from 'lucide-react';

interface IndonesiaMapProps {
  regions: Region[];
  onRegionClick?: (region: Region) => void;
}

export default function IndonesiaMap({ regions, onRegionClick }: IndonesiaMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet from CDN
    const loadLeaflet = async () => {
      if (typeof window === 'undefined') return;

      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!(window as any).L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current || !(window as any).L) return;

      const L = (window as any).L;
      
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

      // Add markers
      regions.forEach((region) => {
        const marker = L.marker(region.coordinates, {
          icon: L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })
        }).addTo(map);
        
        const popupContent = `
          <div style="padding: 0; min-width: 200px; font-family: 'Poppins', sans-serif;">
            <h3 style="font-family: 'Playfair Display', serif; font-weight: bold; font-size: 18px; margin-bottom: 8px; color: #111827;">
              ${region.name}
            </h3>
            <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.5;">
              ${region.description}
            </p>
            <button 
              onclick="window.selectRegion('${region.id}')"
              style="margin-top: 12px; color: #c2882f; font-size: 14px; font-weight: 600; cursor: pointer; background: none; border: none; padding: 0;"
            >
              Lihat Detail →
            </button>
          </div>
        `;
        marker.bindPopup(popupContent);

        marker.on('click', () => {
          if (onRegionClick) {
            onRegionClick(region);
          }
        });
      });

      // Fit bounds
      if (regions.length > 0) {
        const bounds = regions.map(r => r.coordinates);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
      
      mapInstanceRef.current = map;
      setMapLoaded(true);
    };

    // Global function for popup button
    (window as any).selectRegion = (regionId: string) => {
      const region = regions.find(r => r.id === regionId);
      if (region && onRegionClick) {
        onRegionClick(region);
      }
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      delete (window as any).selectRegion;
    };
  }, [regions, onRegionClick]);

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border border-border">
      <div 
        ref={mapRef} 
        className="w-full h-full bg-muted"
      >
        {!mapLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4" />
              <p>Memuat Peta...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
