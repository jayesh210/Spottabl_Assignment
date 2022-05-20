import React,{useState} from 'react'
import '../styling/searchbox.css'
import Avatar from 'react-avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


function CSM({data}) {
    const[filteredData,setFilterData]=useState([]);
    const[emp,setemp]=useState(data);
    const[add,setadd]=useState([]);

    const handlesubmit=e=>{
        e.preventDefault();
        var newemp=emp;
        for(var i=0;i<add.length;i++)
        {  
            // console.log("actual add contain",add[i]);
            newemp.push(add[i][0]);
        }
        setadd([]);
        setemp(newemp);
        console.log(emp);
        
    }
    // onlick function to get id of the employee 
    const clicked=eid=>{
        console.log(eid)
        const newadd=data.filter((value)=>{
            return value.id===eid;
        })
       var tempData=add;
       tempData.push(newadd);
        
        setadd(tempData);
        // console.log("add",add);
       
    }
    // Change Handler 
    const changeHandler = e =>{
        // setInput(e.target.value);
        const searchWord=e.target.value;
        const newFilter=data.filter((value)=>{
            return (value.name.toLowerCase().includes(searchWord.toLowerCase())) || (value.email.toLowerCase().includes(searchWord.toLowerCase())) 
        })
        if(searchWord===""){
        setFilterData([])}
        else {
        setFilterData(newFilter)}
    }
    // delete handler
    const deleteHandler=id=>{
        
        console.log(id)
        // console.log(e.target.id)
        const newemp=emp.filter((value)=>{
            return value.id!==id;
        })
        setemp(newemp);

    }
  return (
    <>
    <div className="search">
    <div className="head">
        Customer Success Managers
    </div>
    
    <form onSubmit={handlesubmit}>

    <div className="searchInput">
      
        <input 
        autoComplete='off'
        className='input'
        onChange={changeHandler}
        type="text"
        // value="Jayesh" 
        placeholder='Add by Name or email'
        name="name"/>     
        

        <button  className='addbtn'>Add CSM</button>
    </div>
    </form> 
        {filteredData!=0 &&(
        <div className="dataResult" for="fade" >
            {
                filteredData.map((value,key)=>{
                    return <div>
                        <div className="dropdown"  onClick={()=>clicked(value.id)}>
                        <div className="profileImage"  >
                            <Avatar name={value.name} size="50" round="50px" fgColor="#000" color="#D7DCFF"/>
                        </div>
                        <div className="flexs1">
                        <div className="name" >
                            {value.name}
                        </div>
                        <div className="flexs2">
                           { (value.post)&&(
                        <div className="post" >
                            <PermIdentityIcon fontSize="string"  style={{color:"grey"}} />{value.post}
                        </div>)}
                        <div className="email" >
                        <FiberManualRecordIcon fontSize="string" style={{color:"grey"}} />
                            {value.email}
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                })
            }
        </div>
        )}
      
    <div className='employeeList'>
        {
                emp.map((value,key)=>{
                    return <div>
                        <div className="Listdropdown">
                            <div className="flex1">
                        <div className="Listlogo" >
                            <Avatar name={value.name} size="45" round="50px" fgColor="#000" color="#D7DCFF"/>
                        </div>
                        <div className="flex2">
                        <div className="ListName">
                            {value.name}
                        </div>
                        <div className="Listpost" >
                            {value.post}
                        </div>
                        </div>
                        </div>
                        <div className="deleteicon" itemID={value.id} onClick={()=>deleteHandler(value.id)}  >
                            <DeleteIcon  />
                        </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
    </>
  )
}

export default CSM