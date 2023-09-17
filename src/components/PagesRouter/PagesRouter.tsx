import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./PagesRouter.scss";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import ReferralProgram from "../../pages/ReferralProgram/ReferralProgram";
import Blog from "../../pages/Blog/Blog";
import ReplacementRules from "../../pages/ReplacementRules/ReplacementRules";

const PagesRouter: FC = () => (
  <div className="pages-router">
    <Routes>
      <Route index element={<Navigate to={"welcome"} />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="referral-program" element={<ReferralProgram />} />
      <Route path="blog" element={<Blog />} />
      <Route path="replacement-rules" element={<ReplacementRules />} />
    </Routes>
  </div>
);

export default PagesRouter;
