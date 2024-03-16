import React from "react";
import {SignupFormDemo} from "@/app/admin/list-nft/sign";
import { NavbarDemo } from "@/app/nav";
import Footer from "@/app/components/Footer";


const YourPage = () => {
    const mapCount = 5;
    return (
        <div>
            <div className="pb-11">
                <NavbarDemo />
            </div>
            <div className="py-10">
                <SignupFormDemo />
                
            </div>
      
        </div>

    );
};

export default YourPage;
