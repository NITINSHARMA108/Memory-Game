import {useState,useEffect} from 'react';
import Header from './components/Header'; 
import Display from './components/Display';
import './App.css';
function App() {
  const [array,setarray]=useState([
      {name:'abelia grandiflora',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic637.jpg',id:1},
      {name:'Abelmoschus manihot',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic1098.jpg',id:2},
      {name:'Abutilon pictum',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic779.jpg',id:3},
      {name:'Acca sellowiana',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic755.jpg',id:4},
      {name:'Acer palmatum',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic676.jpg',id:5},
      {name:'Achillea millefolium',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic177.jpg',id:6},
      {name:'Agave ocahui',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic1019.jpg',id:7},
      {name:'Agave Americana',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic6.jpg',id:8},
      {name:'Agapanthus spec.',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic72.jpg',id:9},
      {name:'Aesculus californica',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic901.jpg',id:10},
      {name:"Aster dumosus 'Sapphire'",img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic1085.jpg',id:11},
      {name:'Babiana curbiscapa',img:'https://www.kapsenbergdesign.com/garden/images/xsmall/pic893.jpg',id:12}
    ]);
  const [count,setCount]=useState(0);
  const [hitted,sethitted]=useState([]);


  const shuffleArray=()=>{
    setarray((array)=>{
      let length=12;
      let temp=[];
      while(length!=0)
      {
        let x=array[Math.floor(Math.random()*12)];
        let a=temp.filter((t)=>t==x);
        if(a.length!=0){
          continue;
        }
        else{
          temp=[...temp,x];
          length-=1;
        }

      }
      return temp;
    })

  }
  const hitcount=(id)=>{
    let a=hitted.filter((e)=>e==id);
    console.log(hitted);
   
    if(a.length!=0)
    {
      window.alert(`Sorry!! You lost \nScore ${count}`);
      window.location.reload(false);
      
    }
    else{
      sethitted([...hitted,id]);
      setCount((count)=>{
        count=count+1
        return count;
      }
    )
    if(hitted.length>=11)
    {
      window.alert('Congratulations you won');
      window.location.reload(false);
      
    }
    
    console.log(hitted);
    shuffleArray();
    }
    

  }

  useEffect(() => {
    //console.log(hitted);
  }, [array])
  return (
    <div className="App">
      <Header score={count} />
      <div className="display">
        <Display array={array} hit={hitcount} />
      </div>
    </div>
  );
}

export default App;
