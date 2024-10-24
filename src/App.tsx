import "./App.css";
import Avatar from "./components/Avatar";




function App() {
  return (
    <div>
      <Avatar
        firstName="Bart"
        lastName="SIMPSON"
        image="https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png"
        imageButton="https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png"

      />
      <Avatar
        firstName="Homer"
        lastName="SIMPSON"
        image="https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png"
        imageButton="https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png"
      />
    </div>
  );
}
export default App;
