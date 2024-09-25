import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { publicRoutes } from "./routes";
import NotFound from "./pages/Not-Found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div
      // className={"App" + (isDarkMode ? " dark" : "")}
      >
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
                {route.children &&
                  route.children.map((routeChild, index) => {
                    const PageChild = routeChild.component;
                    return (
                      <Route
                        key={index}
                        path={routeChild.path}
                        element={<PageChild />}
                      />
                    );
                  })}
              </Route>
            );
          })}

          {/* {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                  Layout = route.layout;
              } else if (route.layout === null) {
                  Layout = Fragment;
              }

              return (
                  <Route
                      key={index}
                      path={route.path}
                      element={
                          <PrivateRoute>
                              <Layout>
                                  <Page />
                              </Layout>
                          </PrivateRoute>
                      }
                  >
                      {route.children &&
                          route.children.map((routeChild, index) => {
                              const PageChild = routeChild.component;
                              return <Route key={index} path={routeChild.path} element={<PageChild />} />;
                          })}
                  </Route>
              );
          })} */}

          <Route path={"*"} element={NotFound} />
        </Routes>

        {/* {isOpen && (
          <AuthModal>
            <Login />
          </AuthModal>
        )} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
