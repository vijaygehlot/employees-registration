// import React from 'react'
// import './userlist.css'
// import Users from '../users/Users';


// export default class extends React.Component {

//   constructor() {
//         super();
//         this.state = {
//           employeeslist: []
//         }
//         this.onAdd = this.onAdd.bind(this);
//       }
      
    
      
//       onAdd(res) {
//        console.log(res)
//       };
      
    
//       componentDidMount() {
        
    
//         fetch('/employeeslist', {
//           method: 'GET',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           }
//         }).then(response => response.json())
//           .then(employeeslist => this.setState({ employeeslist:employeeslist }, () => console.log('employees fetched...', employeeslist.results)));
    
     
//       }
      
    
//       render() {
        
       
//         if (!this.state.employeeslist.results)
//           return (<p>Loading data...</p>)
    
//         return (   
         
//           <div className="flex-box">
         
//           <div >
//             {
    
//               this.state.employeeslist.results.map(employees => <div className="box-1" key={employees.id}>
//                 <h2>{employees.name}</h2>
//                 <p className="emp-info">Email:<span>{employees.email}</span></p>
//                 <p className="emp-info">Phone: <span>{employees.number}</span></p>
//                 <p className="emp-info">Location: <span>{employees.location}</span></p>
//                 <p className="emp-info">Company: <span>{employees.company}</span></p>
//                 <p className="emp-info">About: <span>{employees.about}</span></p>
    
    
    
//               </div>)
//             }
//           </div>
    
//         </div>)
//       }
//     }