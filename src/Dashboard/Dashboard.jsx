import ToBeApproved from "./Admin/ToBeApproved";
import AllItemInCart from "./Cart/AllItemInCart";
import AddAClassByInstructor from "./Instructor/AddAClassByInstructor";
import Instructors from "./Instructor/Instructors";
import Courses from "./user/Courses";
import UsersTable from "./user/UsersTable";

const Dashboard = () => {



    return (
        <div>
            {/* <Courses/>
            <AllItemInCart/> */}
            {/* <Instructors/>
            <UsersTable/> */}
            <AddAClassByInstructor/>
            <ToBeApproved />
        </div>
    );
};

export default Dashboard;