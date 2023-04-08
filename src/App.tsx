import React from 'react';
// import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
// import { getAllUser } from './reduxs/thunks/lang.thunks';
// import { useFetchData } from './hooks/useFetchingData';
// import { useSelector, useDispatch } from 'react-redux';
import RouteApp from './routes';
// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }

// export interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// export interface Geo {
//   lat: string;
//   lng: string;
// }

// export interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
function App() {
  // const { isLoading, data, isError } = useFetchData<User>(`https://jsonplaceholder.typicode.com/users/1`);
  // const userData = useSelector((state: any) => state);
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(getAllUser(data) as any);
  // }, [isLoading])
  return <RouteApp />
}

export default App;
