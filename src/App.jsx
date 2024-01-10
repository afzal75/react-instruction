// import Test from "./components/Test";

import Avatar from "./components/Avatar";

// // default import takei kora jay je default export hoy

// const App = () => {
//   return (
//     <div>
//       {/* <Gallery /> */}
//       <Test></Test>
//     </div>
//   );
// };

// export default App;

export default function App() {
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}
