import List from './List'
import Header from './Header';

const Lists = [{
  // logo: "img",
  iconColor: "#a90000",
  title: "Organize photoshoot",
  tasks: ["Work", "Hooli"],
  day: "Today",
  isCompleted: true
},

{
  iconColor: "#99FFCC",
  title: "Buy Milk",
  tasks: ["Grocery"],
  day: "Today",
  isCompleted: true

},
{
  iconColor: "red",
  title: "Setup meeting w/ Globex",
  tasks: ["Work"],
  day: "Today",
  isCompleted: true

},
{
  iconColor: "purple",
  title: "Renew passport",
  tasks: ["Personal"],
  day: "Tomorrow",
  isCompleted: true

},

{
  iconColor: "red",
  title: "Checklist LA Trip",
  tasks: ["Work"],
  day: "Tomorrow",
  isCompleted: true

}

]
const App = () => {
  return (

    <div>
      <Header />
      {
        Lists.map((list, i) => {
          return (
            <List key={i} iconColor={list.iconColor} title={list.title} tasks={list.tasks} day={list.day} />)
        })
      }
      <h1 style={{ marginLeft: "1rem", fontSize: "25px", fontFamily: "Poppins,sans-serif", fontWeight: "300" }}>Completed</h1>
      {Lists.map((list, i) => {
        return (
          <List key={i}
            iconColor={list.iconColor}
            isCompleted={list.isCompleted}
            title={list.title}
            tasks={list.tasks}
            day={list.day} />
        )
      })
      }
    </div>
  );
}

export default App;
