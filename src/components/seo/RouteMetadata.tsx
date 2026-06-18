import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMetadata, siteConfig } from '../../data/siteMetadata';

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updatePropertyMetaTag(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateCanonical(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

function normalizePath(pathname: string) {
  if (pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const pathname = normalizePath(location.pathname);
    const isKnownRoute = Boolean(routeMetadata[pathname]);

    const metadata = isKnownRoute
      ? routeMetadata[pathname]
      : routeMetadata['/404'];

    const canonicalPath = isKnownRoute ? pathname : '/404';
    const canonicalUrl =
      canonicalPath === '/'
        ? `${siteConfig.siteUrl}/`
        : `${siteConfig.siteUrl}${canonicalPath}`;

    document.title = metadata.title;

    updateMetaTag('description', metadata.description);
    updateMetaTag('robots', metadata.robots ?? 'index, follow');

    updatePropertyMetaTag('og:type', 'website');
    updatePropertyMetaTag('og:title', metadata.title);
    updatePropertyMetaTag('og:description', metadata.description);
    updatePropertyMetaTag('og:site_name', siteConfig.name);
    updatePropertyMetaTag('og:locale', siteConfig.locale);
    updatePropertyMetaTag('og:url', canonicalUrl);

    updatePropertyMetaTag('twitter:card', 'summary');
    updatePropertyMetaTag('twitter:title', metadata.title);
    updatePropertyMetaTag('twitter:description', metadata.description);

    updateCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}