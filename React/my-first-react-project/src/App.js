import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Card2 from './Card2'

function App() {

  let arr = [1999,700,500] ;
  arr.map((item)=>{
    return console.log(item) ;
  })

  let arr2D = [[1,2,3],[4,5,6]] ;
  arr2D.map((arr)=>{
      return arr.map((subitems)=>{
        console.log(subitems);
      })
  })

  let productArray = [
    {id:1001,title:"pencil",price:10,stock:56},
    {id:1002,title:"notebook",price:50,stock:23},
    {id:1003,title:"Apple",price:100,stock:30},
  ] ;
  productArray.map((obj)=>{
    return console.log(obj.id) ;
  })

  return (
    <>
      <Header/>
      <Footer/>
      <br/><br/>
      <h1><u>Class 3 Content</u></h1>
      <Card title={"Tailored Jeans"} price={1999} />
      <Card title={"Shoes"} price={700} />
      <Card price={500} />

      <br/><br/>
      <h1><u>Class 4 & 5 Content</u></h1>
      
      {
        productArray.map((product)=>(
          <Card key={product.id} title={product.title} price={product.price} stock={product.stock} />
        ))
      }


      <br/><br/>
      <h1><u>Class 6 Content</u></h1>
      {
        productArray.map((product)=>(
          <Card2 key={product.id} title={product.title} price={product.price} stock={product.stock} />
        ))
      }
      
    </>
  );
}

export default App;
