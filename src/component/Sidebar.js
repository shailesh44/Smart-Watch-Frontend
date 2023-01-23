import React from 'react';
import { useTranslation } from "react-i18next"
import i18next from "i18next";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
 
  const {t}=useTranslation();
 
  return (
     
    <div style={{ height: '91vh' }} >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href className="text-decoration-none" style={{ color: 'inherit' }}>
          {t('namep')}
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <NavLink exact to="/HomePage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns"> {t('dashboard')}</CDBSidebarMenuItem>
            </NavLink> */}
          
            <NavLink exact to="/Users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">{t('usermanage')}</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Broadcast"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">{t('broadCast')}</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Help" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{t('help')}</CDBSidebarMenuItem>
            </NavLink>
           

            <NavLink exact to="/ChangePass" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">{t('changepass')}</CDBSidebarMenuItem>
            </NavLink>
         
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;