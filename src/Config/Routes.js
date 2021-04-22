import ProgressBar from 'react-topbar-progress-indicator';
import Lazyloading from '../Components/Loading/LazyLoading';

const routes = [
    {
        path: "/profile",
        name: "Profile",
        component: Lazyloading(
            () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(import("../Container/Profile")), 1500);
                });
            },
            {
                fallback: <ProgressBar />
            }
        ),
    },
    {
        path: "/portofolio",
        name: "Portofolio",
        component: Lazyloading(
            () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(import("../Container/Portofolio")), 1500);
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
                    setTimeout(() => resolve(import("../Container/CV")), 1500);
                });
            },
            {
                fallback: <ProgressBar />
            }
        ),
    }
]

export default routes;