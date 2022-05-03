import './App.css';
import { Changelog } from './components/Changelog';

import logs from './data/records.json';

// const logs = [
//   {
//     name: 'Molly Marchall',
//     message:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos vitae eos, ex ipsum omnis, iste, nobis explicabo delectus provident molestiae. Repellendus unde minus quod nemo modi ullam id animi!',
//     id: 1,
//   },
//   {
//     name: 'Noah Simpson',
//     message:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut numquam iste iusto incidunt neque, ducimus accusantium perspiciatis impedit aliquam quod deserunt suscipit, accusamus ipsum, quis ullam nesciunt facilis autem.',
//     id: 2,
//   },
//   {
//     name: 'Molly Marchall',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 3,
//   },
//   {
//     name: 'Molly Marchall',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 4,
//   },
//   {
//     name: 'Arabella Wang',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 5,
//   },
//   {
//     name: 'Mini Skutt',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 6,
//   },
//   {
//     name: 'Arabella Wang',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 7,
//   },
//   {
//     name: 'Hasse Aro',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 8,
//   },
//   {
//     name: 'Zoltan Beef',
//     message:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni similique ratione explicabo nisi praesentium excepturi pariatur totam. Distinctio rem obcaecati ut corporis delectus. Dolorem enim earum deleniti eius, rem similique!',
//     id: 9,
//   },
// ];

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1>Changelog</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          repellat nulla pariatur fugit odit labore, laudantium consequuntur
          magnam tempore distinctio minima quam dolores.
        </p>
      </div>
      <Changelog logs={logs} />
    </div>
  );
}

export default App;
