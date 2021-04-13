import * as React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleLoader, unfollow} from "../../redux/usersReducer";
import axios from "axios";
import UsersFunctional from "./UsersFunctional";
import Loader from "./Loader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.toggleLoader(false);
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsersCount(responce.data.totalCount);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(responce => {
            this.props.toggleLoader(false);
            this.props.setUsers(responce.data.items);
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader/> : <UsersFunctional totalUsersCount={this.props.totalUsersCount}
                                                                      pageSize={this.props.pageSize}
                                                                      currentPage={this.props.currentPage}
                                                                      users={this.props.users}
                                                                      follow={this.props.follow}
                                                                      unfollow={this.props.unfollow}
                                                                      onPageChanged={this.onPageChanged}
                                                                      pages={this.props.pages}/>}

            </>
        );
    }
}


let mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    })
};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoader,
})
(UsersContainer);