import { useContext } from "react";
import ToBeApproved from "./Admin/ToBeApproved";
import AllItemInCart from "./Cart/AllItemInCart";
import AddAClassByInstructor from "./Instructor/AddAClassByInstructor";
import Instructorsfor from "./Instructor/Instructorsfor";
import Courses from "./user/Courses";
import UsersTable from "./user/UsersTable";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllPayments from "./user/AllPayments";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllClasses from "./Admin/AllClasses";

const Dashboard = () => {

    const { oho, allPayments, user } = useContext(AuthContext);

    const coursePurchased = allPayments.filter(i => i?.item?.ite?.instructorEmail === user?.email);
    

    return (
        <div className="grid grid-cols-1 pt-20">


            {/* ---------------------Admin Dashboard-------------------- */}
            {
                oho?.phoneNumber === "admin" &&
                <Tabs>
                    <TabList className='rounded-xl p-3 text-2xl font-semibold text-center'>
                        <Tab>All Classes</Tab>
                        <Tab>Users Management</Tab>
                        <Tab>Class Add Requests</Tab>
                    </TabList>

                    <div className="border-2"></div>

                    <TabPanel>
                        <AllClasses />
                    </TabPanel>

                    <TabPanel>
                        <UsersTable />
                    </TabPanel>

                    <TabPanel>
                        <ToBeApproved />
                    </TabPanel>
                </Tabs>
            }



            {/* ---------------------Instructor Dashboard-------------------- */}
            {
                oho?.phoneNumber === "instructor" &&
                <Tabs>

                    <div className="text-2xl text-center divider">Total Students : {coursePurchased.length}</div>

                    <TabList className='rounded-xl p-3 text-2xl font-semibold text-center'>
                        <Tab>Add Class</Tab>
                        <Tab>My Classes</Tab>
                    </TabList>

                    <div className="border-2"></div>

                    <TabPanel>
                        <AddAClassByInstructor />
                    </TabPanel>

                    <TabPanel>
                        <Instructorsfor />
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