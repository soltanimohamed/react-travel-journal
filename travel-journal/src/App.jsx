import Header from "./components/Header"
import data from "./assets/data"
import Card from "./components/Card"

export default function App(){
  const travelDestinations = data.map(destination =>{
    return(
      <Card
      key={destination.key}
       destination={destination}
       />
    )
  })



  return(
    <>
      <Header />
      <section>
        {travelDestinations}
      </section>
    </>
  )
}