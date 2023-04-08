import "./App.css";
function App() {
  const x = 5;
  const y = 7;
  const z = x + y;
  console.log(x);
  return (
    <>
      <h1>ReactJs</h1>
      <div>Hôm nay tôi học bài</div>
      <div>{z}</div>
    </>
  );
}

export default App;
