import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 6Ct6puSMbp-CrbxLnG-GA_nVt2zoQsloEUZt_jj-uyE",
	},
});
