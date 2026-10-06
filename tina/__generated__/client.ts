import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/tmp/americasnewstoday-clone/tina/__generated__/.cache/1791305983451', url: 'https://content.tinajs.io/2.4/content/fc6d8b6a-9072-4ac2-9a4b-12a482200442/github/main', token: '7d632782370908199676bb26e3acb471a1a40624', queries,  });
export default client;
  