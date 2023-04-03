<div className="App">
      <header className="App-header">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control"  onChange={(e)=>setName(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1"onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={handlesubmit()}>Submit</button>
</form>


      </header>
    </div>
    function App(){
      const [Myname , setMyname]=useState([]);
    
     useEffect(()=>{
    axios.get('https://6427e516161067a83b02dbcf.mockapi.io/Student').then((res)=>console.log(res.data))
    
    
    
     },[]);
    
    
    
    
     
    
      return (
        <>
        <h1> axios function</h1>
        {Myname.map((post)=>{
          const{id,title,body}=post;
          return(
            <div className='grid' key={id}>
          <p>  {title} </p>
           <p>  {body}</p>
            </div>
          )
        })}
        </>
       
      );
    
    }
    export default App;