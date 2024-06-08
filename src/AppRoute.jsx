import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './lang/i18next';
import SignupIndex from './components/modules/sign-up/SignupIndex';
import SignupViewIndex from './components/modules/sign-upView/Sign-upViewIndex';
import SignupEditIndex from './components/modules/sign-upEdit/Sign-upEditIndex';
import SignupTableIndex from './components/modules/sign-upTable/Sign-upTableIndex';
import SelectDesignIndex from './components/modules/selectDesign.jsx/SelectDesignIndex';
function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="sign-up" element={<SignupIndex />} />
                <Route path="sign-upView" element={<SignupViewIndex />} />
                <Route path="sign-up-edit" element={<SignupEditIndex />} />
                <Route path="sign-up-users" element={<SignupTableIndex />} />
                <Route path="card-select" element={<SelectDesignIndex />} />
                <Route path="sign-upView" element={<SignupViewIndex />} />
            </Route>
        </Routes>
    );
}

export default AppRoute;
