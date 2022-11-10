import List from './List'
import Header from './Header';
import Footer from './Footer';

const Lists = [{

  iconColor: "#a90000",
  title: "Organize photoshoot",
  tasks: ["Work", "Hooli"],
  day: "Today"
},

{
  iconColor: "#99FFCC",
  title: "Buy Milk",
  tasks: ["Grocery"],
  day: "Today"

},
{
  iconColor: "red",
  title: "Setup meeting w/ Globex",
  tasks: ["Work"],
  day: "Today"
},
{
  iconColor: "purple",
  title: "Renew passport",
  tasks: ["Personal"],
  day: "Tomorrow"
},

{
  iconColor: "red",
  title: "Checklist LA Trip",
  tasks: ["Work"],
  day: "Tomorrow"
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
      <Footer />
    </div>
  );
}

export default App;
