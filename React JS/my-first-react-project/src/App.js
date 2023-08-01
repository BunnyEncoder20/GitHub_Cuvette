import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function App() {
  return (
    <>
      <Header/>
      <Footer/>
      <br/><br/>
      <h1><u>Class 3 Content</u></h1>
      <Card title={"Tailored Jeans"} price={1999} />
      <Card title={"Shoes"} price={700} />
      <Card price={500} />
    </>
  );
}

export default App;
