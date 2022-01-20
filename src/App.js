import Entry from "./components/entry";

function App() {
  return (
    <div>
      <h1>eFolio: Passage Flight</h1>
      <h2>by Daniel McCann-Sayles</h2>

      <Entry title="Entry 1: Jan 16 2022" body="Over break I created this efolio and worked on the app. 
      I got a barebones version working to test out the bluetooth. In the next couple weeks I will test the bluetooth
      using the tablets we've purchased & the arduino components, and then integrate that into an MVP of the app. Additionally
      I plan on adding more content to this efolio and making it look a lot nicer"></Entry>


    </div>
  );
}

export default App;
