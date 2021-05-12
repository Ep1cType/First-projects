import * as React from "react";
import {connect} from "react-redux";
import {
    follow,
    followAccess,
    getUsers,
    onPageChange,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleLoader,
    unfollow,
    unfollowAccess
} from "../../redux/usersReducer";
import UsersFunctional from "./UsersFunctional";
import Loader from "./Loader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }



    onPageChanged = (page) => {
        debugger;
        this.props.onPageChange(page, this.props.pageSize)

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader/> : <UsersFunctional totalUsersCount={this.props.totalUsersCount}
                                                                      pageSize={this.props.pageSize}
                                                                      currentPage={this.props.currentPage}
                                                                      users={this.props.users}
                                                                      follow={this.props.follow}
                                                                      followAccess={this.props.followAccess}
                                                                      unfollow={this.props.unfollow}
                                                                      unfollowAccess={this.props.unfollowAccess}
                                                                      onPageChanged={this.onPageChanged}
                                                                      followingInProgress={this.props.followingInProgress}
                                                                      toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    })
};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoader,
    toggleFollowingProgress,
    getUsers,
    onPageChange,
    followAccess,
    unfollowAccess
})
(UsersContainer);