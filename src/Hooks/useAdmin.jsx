import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";


const useAdmin = () => {
    const {user, loading} = UseAuth();
    const axiosSecure = useAxiosSecure()
    console.log(loading);
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async() =>{
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        console.log(res.data);
        return res.data?.role;

    }
   })
   return [isAdmin, isAdminLoading]
};

export default useAdmin;


// const useAdmin = () => {
//     const {user, loading} = useAuth();
//     const axiosSecure = useAxiosSecure()
//    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
//     queryKey: [user?.email, 'isAdmin'],
//     enabled: !loading,
//     queryFn: async() =>{
//         const res = await axiosSecure.get(`/Users/${user.email}`);
//         // console.log(res.data);
//         return res.data?.admin;
//     }
//    })
//    return [isAdmin , isAdminLoading]
// };

// export default useAdmin;