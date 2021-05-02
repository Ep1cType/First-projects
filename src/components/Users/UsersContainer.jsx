import * as React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleLoader,
    unfollow
} from "../../redux/usersReducer";
import UsersFunctional from "./UsersFunctional";
import Loader from "./Loader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleLoader(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleLoader(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })

    }



    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleLoader(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleLoader(false);
            this.props.setUsers(data.items);
        })
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
})
(UsersContainer);