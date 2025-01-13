async function list(){
    let data=await fetch("https://dummyjson.com/products");
    data=await data.json();
    console.log(data);
    return data.products;
  }

async function page() {
  let product=list();
  console.log(product);
    return (
    <div>
      <h1>Suiii</h1>
    </div>
  )
}

export default page

//how to get softwqare deveopment 
