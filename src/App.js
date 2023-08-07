
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {

  const [shopData,setshopData]=useState([])

const data = async ()=>{
  const result = await axios.get('/shop.json')
  console.log(result.data.category);
  setshopData(result.data.category)
}

const [sub,setSub] = useState([])
const openvalues = (e)=>{
  var id=e.target.value
  shopData.filter(subval=>subval.id===id).map(fvalue=>setSub([fvalue]))
  console.log(sub);
}


useEffect(()=>{
  data()
},[])


  return (
    <div className="App">
      <div className='shop-box'>
        <div className='shop-head'>
          <ul>
            <li>SHOP BY CATEGORY <i class="fa-solid fa-angle-down"></i></li>
            <li><i class="fa-solid fa-tag"></i>OFFERS</li>
          </ul>
        </div>
        {/* dropdown */}
        <div className='dropdown-main'>
          
            {
              shopData?.map(category=>(
                // <li onMouseOver={openvalues(category.id)}  >{category.name}</li>
                <ul>
                    {/* <li >{category.name}</li> */}
                    <li onMouseOver={openvalues}  value={category.id}>{category.name}</li>
                </ul>
                
              ))
            }
          <div className='dropdown-main-sub'>
              <ul>
                {
                  sub?.map(val=>(
                    // <li>{val[sub] }</li>
                    <li>{Object.keys(val.sub)}</li>
                  ))
                }
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
