import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
  const acceptLanguage = request.headers.get('accept-language');
  const lang = acceptLanguage?.startsWith('de') ? 'de' : 'en';

  throw redirect(307, `/${lang}/`);
};
