import { createWebHistory, createRouter } from "vue-router";
import Index from '@/pages/index.vue'
// import Login from '@/pages/login.vue'

import Sample from '@/pages/sample/Sample.vue'
import Sample2 from '@/pages/sample/Sample2.vue'
import Sample3 from '@/pages/sample/Sample3.vue'
import Sample4 from '@/pages/sample/Sample4.vue'
import Sample5 from '@/pages/sample/Sample5.vue'
import AssetMaster from '@/pages/asset/assetMaster.vue'
import AssetMng from '@/pages/asset/assetMng.vue'
import Lisk from '@/pages/lisk/Lisk.vue'
import LiskAdd from '@/pages/lisk/LiskAdd.vue'
import Threat from '@/pages/threat/Threat.vue'
import ThreatAdd from '@/pages/threat/ThreatAdd.vue'
import WeekPoint from '@/pages/weekPoint/WeekPoint.vue'
import WeekPointAdd from '@/pages/weekPoint/WeekPointAdd.vue'
import NormalUser from '@/pages/userMng/NormalUser.vue'
import VendorMng from '@/pages/userMng/VendorMng.vue'
import Work from '@/pages/work/Work.vue'
import WorkWeek from '@/pages/work/WorkWeek.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    // {
    //     path: '/',
    //     name: 'login',
    //     component: Login,
    // },
    {
        path: '/Sample/Sample',
        name: 'Sample',
        component: Sample,
    },
    {
        path: '/Sample/Sample2',
        name: 'Sample2',
        component: Sample2,
    },
    {
        path: '/Sample/Sample3',
        name: 'Sample3',
        component: Sample3,
    },
    {
        path: '/Sample/Sample4',
        name: 'Sample4',
        component: Sample4,
    },
    {
        path: '/Sample/Sample5',
        name: 'Sample5',
        component: Sample5,
    },

    {
        path: '/Asset/assetMaster',
        name: 'assetMaster',
        component: AssetMaster,
    },
    {
        path: '/Asset/AssetMng',
        name: 'AssetMng',
        component: AssetMng,
    },

    {
        path: '/Lisk/Lisk',
        name: 'Lisk',
        component: Lisk,
    },
    {
        path: '/Lisk/LiskAdd',
        name: 'LiskAdd',
        component: LiskAdd,
    },

    {
        path: '/Threat/Threat',
        name: 'Threat',
        component: Threat,
    },
    {
        path: '/Threat/ThreatAdd',
        name: 'ThreatAdd',
        component: ThreatAdd,
    },

    {
        path: '/WeekPoint/WeekPoint',
        name: 'WeekPoint',
        component: WeekPoint,
    },
    {
        path: '/WeekPoint/WeekPointAdd',
        name: 'WeekPointAdd',
        component: WeekPointAdd,
    },

    {
        path: '/UserMng/NormalUser',
        name: 'NormalUser',
        component: NormalUser,
    },
    {
        path: '/UserMng/VendorMng',
        name: 'VendorMng',
        component: VendorMng,
    },

    {
        path: '/Work/Work',
        name: 'Work',
        component: Work,
    },
    {
        path: '/Work/WorkWeek',
        name: 'WorkWeek',
        component: WorkWeek,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router


