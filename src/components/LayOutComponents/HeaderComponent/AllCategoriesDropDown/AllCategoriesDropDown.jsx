import React from 'react';
import './AllCategoriesDropDown.css';
import { useContext } from 'react';
import { createContext } from 'react';
import DropDownMenuElement from '../DropDownMenuElement/DropDownMenuElement';


const AllCateGoriesDropDownContext = createContext(false)

export default function AllCategoriesDropDown() {
    const ShowAllCategories = useContext(AllCateGoriesDropDownContext)
    return (<>
        {ShowAllCategories && <div className='AllCategoriesDropDown'>
            <div className='AllCategoriesDropDown-TopLeftCorner'>

            </div>
            <DropDownMenuElement Text={`Heath & Wellness`} NavLink={'/shop/category/health-wellness'}/>
        </div>}
    </>
    )
}

export { AllCateGoriesDropDownContext };
