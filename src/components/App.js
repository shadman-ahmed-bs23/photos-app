import React from "react";
import axios from "axios";

//Importing Components
import SearchBar from "./SearchBar";

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID 6Ct6puSMbp-CrbxLnG-GA_nVt2zoQsloEUZt_jj-uyE",
			},
		});
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
