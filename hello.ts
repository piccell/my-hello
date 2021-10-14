import { h, Helmet, ssr, tw } from "https://crux.land/nanossr@0.0.1";

const Hello = (props) => (
  <div class={tw`bg-white flex h-screen`}>
    <Helmet>
      <title>Hello {props.name}</title>
    </Helmet>
    <h1 class={tw`text-5xl text-gray-600 m-auto mt-20`}>
      Hello {props.name}!
    </h1>
  </div>
);

addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const name = url.searchParams.get("name") ?? "world";
  event.respondWith(ssr(() => <Hello name={name} />));
});
