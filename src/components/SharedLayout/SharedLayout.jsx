import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
