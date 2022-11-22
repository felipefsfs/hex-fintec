import { serve } from "std.server";

export function init_server() {
  serve((_req) => {
    return new Response("Deno from Github3", {
      headers: { "content-type": "text/plain" },
    });
  });
}
