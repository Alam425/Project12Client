import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import Instructor from "../common/Instructor";

const Instructors = () => {

    const { instructors } = useContext(AuthContext);
    console.log(instructors);
    return (
        <div>
            <div className="mt-20">
                <div className="sm:card-side lg:grid lg:grid-cols-4 lg:items-center shadow-xl border-2 border-slate-300 rounded-2xl m-5 p-5">
                    <figure>
                        <img className="w-80 mx-auto" src="https://aslafacademy.com/wp-content/uploads/2020/05/male-avatar-01-2.png" alt="Album" />
                        <h2 className="text-3xl text-slate-800 font-bold text-center">Abu Nawwar</h2>
                        <h2 className="text-md text-red-800 font-bold text-center">Founder & Director</h2>
                    </figure>
                    <div className="card-body lg:col-span-3">
                        <h2 className="card-title text-4xl font-bold text-red-800">About the Founder</h2>
                        <p>He is honourable Founder and Director of Aslaf Academy.
                            A prominent Entrepreneur. Also Founder of rising Islamic Book publication Maktabatul Aslaf and founder of famous online market place <Link target="_blank" className="text-blue-600" to="https://www.niyamahshop.com/">Niyamah Shop</Link>.<br /><br />

                            He took his education from each kind of educational systems of Bangladesh. Initially, some years in English curriculum. Then went to Madrasah (Aliya) for Islamic Education and studied for nine years. After that completed his education from general curriculum of Bangladesh.<br /><br />

                            Currently studying in Arabic language (Lugatul Arabiya li-gairin natiqin) in Islamic University of Madina and also continuing his study in Qawmi Madrasa.<br /><br />

                            Likes to address himself as Talibul Ilm (Knowledge seeker). Strongly influenced by Imam Abu Haneefa, Imam Abdullah Ibnul Mubarak, Sheikh Ashraf Ali Thanvi, Sheikh Zakaria Kandalavai, Sheikh Shamsul Haq Faridpuri.<br /><br />

                            Dreams to have an Islamic educated productive Muslim ummah all over the world and so preaches one ummah concept. May Allah Bless him in both Duniya and Akhirah.</p>
                    </div>
                </div>
                <div className="sm:card-side lg:grid lg:grid-cols-4 lg:items-center shadow-xl border-2 border-slate-300 rounded-2xl m-5 p-5">
                    <figure>
                        <img className="w-80 mx-auto" src="https://aslafacademy.com/wp-content/uploads/2021/03/avatar-f-01-1890x2048.png" alt="Album" />
                        <h2 className="text-3xl text-slate-800 font-bold text-center">Zainab Al-Gazi</h2>
                        <h2 className="text-md text-red-800 font-bold text-center">Principal</h2>
                    </figure>
                    <div className="card-body lg:col-span-3">
                        <h2 className="card-title text-4xl font-bold text-red-800">About the Principal</h2>
                        <p>She is honourable Principle of Aslaf Academy.<br /><br />

                            She grew up in Madina Munawwarah. Studied there in Bangladeshi Embassy School, Government Madrasa and Tahfiz. Then studied Quran, Mutun, Hadith, Fiqh at Masjid An Nabawi. Then graduated from Mahad Nibras (Controlled by Madina University).<br /><br />

                            She has become specialist in Quran recitation, Tazweed and parenting. Studied Tazweed,  Parenting and Dawah to non-believers towards Islam with various scholars in Madinah.<br /><br />

                            She worked as a teacher for a long time at private Tahfiz and Masjid An-Nabawi. Being fluent in 5 languages, she was a valuable teacher of Qur’an and Fiqh to the new muslimahs of different countries in the Madinah Dawah Center. Currently teaching Qaida, Quran, Tazweed, Islamic Manners,  Parenting etc in Aslaf Academy.<br /><br />

                            Likes to address herself as Talibatul Ilm (Knowledge seeker). <br /><br />
                            May Allah Bless her in both Duniya and Akhirah.</p>
                    </div>
                </div>
                <div>
                    <SectionTitle down={'Male Instructors'}></SectionTitle>
                    <div>
                        {
                            instructors.filter(i => i.gender === "male")?.map(i => <Instructor key={i.serial} i={i}></Instructor>)
                        }
                    </div>
                </div>
                <div>
                    <SectionTitle down={'Female Instructors'}></SectionTitle>
                    <div>
                        {
                            instructors.filter(i => i.gender === "female")?.map(i => <Instructor key={i.serial} i={i}></Instructor>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;