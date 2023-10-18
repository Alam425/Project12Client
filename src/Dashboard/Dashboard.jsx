import { useContext } from "react";
import ToBeApproved from "./Admin/ToBeApproved";
import AllItemInCart from "./user/Cart/AllItemInCart";
import AddAClassByInstructor from "./Instructor/AddAClassByInstructor";
import Instructorsfor from "./Instructor/Instructorsfor";
import Courses from "./user/Courses";
import UsersTable from "./Admin/UsersTable";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllPayments from "./user/AllPayments";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllClasses from "./Admin/AllClasses";

const Dashboard = () => {

    const { oho, allPayments, user } = useContext(AuthContext);
// console.log('oho', oho, 'user', user);
    const coursePurchased = allPayments.filter(i => i?.item?.ite?.instructorEmail === user?.email);
    

    return (
        <div className="grid grid-cols-1 pt-20">


            {/* ---------------------Admin Dashboard-------------------- */}
            {
                oho?.phoneNumber === "admin" &&
                <Tabs>
                    <TabList className='rounded-xl p-3 text-2xl font-semibold text-center'>
                        <Tab>Course Add Requests</Tab>
                        <Tab>Users Management</Tab>
                        <Tab>All Classes</Tab>
                    </TabList>

                    <div className="border-2"></div>

                    <TabPanel>
                        <ToBeApproved />
                    </TabPanel>

                    <TabPanel>
                        <UsersTable />
                    </TabPanel>

                    <TabPanel>
                        <AllClasses />
                    </TabPanel>
                </Tabs>
            }



            {/* ---------------------Instructor Dashboard-------------------- */}
            {
                oho?.phoneNumber === "instructor" &&
                <Tabs>

                    <div className="text-2xl text-center divider">Total Students : {coursePurchased.length}</div>

                    <TabList className='rounded-xl p-3 text-2xl font-semibold text-center'>
                        <Tab>My Classes</Tab>
                        <Tab>Add Class</Tab>
                    </TabList>

                    <div className="border-2"></div>

                    <TabPanel>
                        <Instructorsfor />
                    </TabPanel>

                    <TabPanel>
                        <AddAClassByInstructor />
                    </TabPanel>
                </Tabs>
            }



            {/* ---------------------Student Dashboard-------------------- */}
            {
                oho?.phoneNumber === null &&
                <Tabs>
                    <TabList className='rounded-xl p-3 text-2xl font-semibold text-center'>
                        <Tab>Cart</Tab>
                        <Tab>Enrolled Courses</Tab>
                        <Tab>Successful Payments</Tab>
                    </TabList>
                    
                    <div className="border-2"></div>

                    <TabPanel>
                        <AllItemInCart />
                    </TabPanel>

                    <TabPanel>
                        <Courses />
                    </TabPanel>

                    <TabPanel>
                        <AllPayments />
                    </TabPanel>
                </Tabs>

            }

        </div>
    );
};

export default Dashboard;