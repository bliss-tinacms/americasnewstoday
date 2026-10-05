import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/tmp/americasnewstoday-clone/tina/__generated__/.cache/1791216896734', url: 'http://localhost:4001/graphql', token: '7d632782370908199676bb26e3acb471a1a40624', queries,  });
export default client;
  