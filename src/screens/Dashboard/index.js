import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../actions'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            articleData: []
        }
    }
    render() {
        console.log("this.props", this.props);
        return (
            <div>
                <h1>Dashboard</h1>
                <label style={{ cursor: 'pointer' }} onClick={() => this.props.history.push('/')}>Logout</label>
                <button onClick={() => this.saveArticle()}>Save</button>
            </div >
        )
    }

    saveArticle = async () => {
        let data = await this.props.storeArticleData();
        console.log("data", data);
        console.log("this.props", this.props);
    }
}

const mapStateToProps = (state) => ({
    articleData: state.articles
})

const mapDispatchToProps = (dispatch) => ({
    storeArticleData: () => dispatch(addArticle({ "article1": "News" }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 
