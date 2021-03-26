import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import DataUsageIcon from '@material-ui/icons/DataUsage';

export const SidebarData = [
    {
        title: "Statistics",
        icon: <DataUsageIcon/>,
        url: "/register",
    },
    {
        title: "Team management",
        icon: <GroupIcon/>,
        url: "/team",
    },
    {
        title: "Patch notes",
        icon: <HomeIcon/>,
        url: "/patch-notes",
    },
    {
        title: "Champions",
        icon: <HomeIcon/>,
        url: '/champions'
    },
    {
        title: "E-sport",
        icon: <HomeIcon/>,
        url: "/e-sport",
    },
]