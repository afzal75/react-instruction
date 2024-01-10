import { Profile } from "./Profile"; // named import

export default function Gallery() {
  // default export
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
