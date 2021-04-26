import ProgressBar from 'react-topbar-progress-indicator';
import Lazyloading from '../Components/Loading/LazyLoading';

const routes = [
    {
        path: "/profile",
        name: "Profile",
        component: Lazyloading(
            () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(import("../Container/Pages/Profile")), 1500);
                });
            },
            {
                fallback: <ProgressBar />
            }
        ),
        isExact: true,
    },
    {
        path: "/portofolio",
        name: "Portofolio",
        component: Lazyloading(
            () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(import("../Container/Pages/Portofolio")), 1500);
                });
            },
            {
                fallback: <ProgressBar />
            }
        ),
    },
    {
        path: "/cv",
        name: "CV",
        component: Lazyloading(
            () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(import("../Container/Pages/CV")), 1500);
                });
            },
            {
                fallback: <ProgressBar />
            }
        ),
        isExact: true,
    }
]

export default routes;