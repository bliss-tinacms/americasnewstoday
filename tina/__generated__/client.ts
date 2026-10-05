import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/tmp/boilerplate-clone/tina/__generated__/.cache/1791202484028', url: 'https://content.tinajs.io/2.4/content/40bc8cd1-d0fe-4061-b99c-d91be2de59e0/github/main', token: '6a5378a0fcd649b38871a0698d2a4573c08c4b48', queries,  });
export default client;
  