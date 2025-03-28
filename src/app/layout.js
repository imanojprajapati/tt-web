import { DMSans, clashGrotesk, inter } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Bootstrap js
import ImportBsJS from "@/src/app/components/BootstrapClient";

// ScrollToTop
import ScrollToTop from "@/src/app/hooks/ScrollToTop";

import Header from "./components/common/header";
// main css
import "/public/css/main.css";
import "/public/css/mobile-nav.css";
import "/public/css/app.css";
import "/public/css/splitting.css";
// import "../app/styles/app.css";
// import "../app/styles/main.css";
// import "../app/styles/mobile-nav.css";
import Footer from "./components/common/footer";

export const metadata = {
	title: "Toupto Technology",
	description: "",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			  <link rel="icon" href="/tt.png" type="image/png" />
			  <link rel="icon" href="/tt.png" sizes="32x32" />
			<body className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}>
				<Header/>
				<ImportBsJS />
				{children}
				<Footer/>
				<ScrollToTop />
			</body>
		</html>
	);
}
