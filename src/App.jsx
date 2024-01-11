// // import Test from "./components/Test";

// import PackingList from "./components/PackingList";

// // import Avatar from "./components/Avatar";

// // // default import takei kora jay je default export hoy

// // const App = () => {
// //   return (
// //     <div>
// //       {/* <Gallery /> */}
// //       <Test></Test>
// //     </div>
// //   );
// // };

// // export default App;

// export default function App() {
//   return <PackingList />;
// }

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const App = () => {
  // const listItems = people.map((person) => <li>{person}</li>);

  const chemistss = people.filter((p) => p.profession === "chemist");
  // console.log(chemist);

  const allChemist = chemistss.map((c) => <li key={c.id}>{c.name}</li>);

  return (
    <div>
      <div>{allChemist}</div>
    </div>
  );
};

export default App;
