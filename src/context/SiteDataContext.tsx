'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface SiteData {
  jobs: any[];
  services: any[];
  clients: any[];
  settings: Record<string, any>;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const SiteDataContext = createContext<SiteData>({
  jobs: [],
  services: [],
  clients: [],
  settings: {},
  loading: true,
  error: null,
  refetch: () => {},
});

export function SiteDataProvider({ children }: { children: React.ReactNode }) {
  const [jobs, setJobs] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSiteData = useCallback(() => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:5000/api/site-data')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setJobs(Array.isArray(data.jobs) ? data.jobs : []);
        setServices(Array.isArray(data.services) ? data.services : []);
        setClients(Array.isArray(data.clients) ? data.clients : []);
        setSettings(data.settings && typeof data.settings === 'object' ? data.settings : {});
      })
      .catch(err => {
        console.error('SiteData fetch error:', err.message);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchSiteData();
  }, [fetchSiteData]);

  return (
    <SiteDataContext.Provider value={{ jobs, services, clients, settings, loading, error, refetch: fetchSiteData }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
