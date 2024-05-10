import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";


const useAdmin = () => {
    const {user, loading} = UseAuth();
    console.log(user?.email);
    const axiosSecure = useAxiosSecure()
    console.log(loading);
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async() =>{
        const res = await axiosSecure.get(`http://localhost:5000/api/v1/user/admin/${user?.email}`);
        console.log(res.data[0].role);
        return res.data[0].role;

    }
   })
   return [isAdmin, isAdminLoading]
};

export default useAdmin;


