import React from 'react';
import './BrandsDropDown.css';
import { useContext } from 'react';
import DropDownMenuElement from '../DropDownMenuElement/DropDownMenuElement';

const BrandsDropDownContext = React.createContext(false)

export default function BrandsDropDown() {
    const showBrands = useContext(BrandsDropDownContext);
    
    return (
        <>
            {showBrands && (
                <div className='BrandsDropDown'>
                    <div className='BrandsDropDown-TopLeftCorner'>

                    </div>
                    <div className='BrandsDropDown-Diplay'>
                        <div className='BrandsDropDown-PopularBrandsDiv'>
                            <p className='BrandsDropDown-PopularBrandsDiv-Heading'>Popular Brands</p>
                        </div>
                        <div className='BrandsDropDown-DiplaySeparate'></div>
                        <div className='BrandsDropDown-BrandsDiv'>
                            <p className='BrandsDropDown-BrandsDiv-Heading'>Brands</p>
                            <DropDownMenuElement Text={'All'}/>
                            <DropDownMenuElement Text={'A-D'}/>
                            <DropDownMenuElement Text={'E-G'}/>
                            <DropDownMenuElement Text={'H-K'}/>
                            <DropDownMenuElement Text={'L-P'}/>
                            <DropDownMenuElement Text={'Q-T'}/>
                            <DropDownMenuElement Text={'U-Z'}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export { BrandsDropDownContext }


