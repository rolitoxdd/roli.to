import blog, { redirects,  } from "https://deno.land/x/blog@0.3.3/blog.tsx";
import { BlogSettings } from "https://deno.land/x/blog@0.3.3/types.d.ts"

const settings: BlogSettings = {
  title: "AAAAAAA",
  description: "solo es una prueba jiji",
  avatar: "./assets/avatar.jpeg",
  // cover: "https://deno-avatar.deno.dev/avatar/blog.svg",
  // coverStyle: "avatar-rounded",
  author: "An author",
  background: "#f9f9f9",
  links: [
    { title: "Email", url: "mailto:rolo.alv97@gmail.com" },
    { title: "GitHub", url: "https://github.com/rolitoxdd" },
  ],
  middlewares: [
    
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    redirects({
     "/hello_world.html": "/hello_world",
    }),
  ],
}
blog( settings );
