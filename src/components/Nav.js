import React from 'react';
import { SlGraph } from "react-icons/sl";
import {BsPlusLg, BsPerson} from "react-icons/bs";
import {AiOutlineFolderOpen, AiOutlineSetting} from "react-icons/ai";
import {RiFileUploadLine} from "react-icons/ri";
import {HiOutlineDocumentReport} from "react-icons/hi";
import {FiLogOut} from "react-icons/fi";
import './nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <ul className='list'>
        <li>
            <SlGraph />
            <p>MEMBER</p>
        </li>
        <li>
            <BsPlusLg />
            <p>NEW</p>
        </li>
        <li>
            <BsPerson />
            <p>PAIENT</p>
        </li>
        <li>
            <AiOutlineFolderOpen/>
            <p>FOLDER</p>
        </li>
        <li><RiFileUploadLine/>
            <p>UPLOAD</p>
        </li>
        <li><HiOutlineDocumentReport/>
            <p>REPORT</p>
        </li>
        <li><AiOutlineSetting/>
            <p>SETTING</p>
        </li>
        <li><FiLogOut/>
            <p>LOGOUT</p>
        </li>
      </ul>
    </div>
  )
}

export default Nav
