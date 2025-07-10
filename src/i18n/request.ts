import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (request) => {
  // Use locale from cookie, headers, or default:
  const locale = 'en'; 

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
