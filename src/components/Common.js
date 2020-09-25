import React from 'react'
import {NavLink} from "react-router-dom";
import {Naira} from "../utils";
import {BsCalendar} from "react-icons/bs";


export const TaskCard = ({data}) => {
    // new-task-list-item--issue
    // new-task-list-item--open
    // new-task-list-item--draft
    // new-task-list-item--offered
    // new-task-list-item--ineligible
    return (
        <NavLink
            to={'/task/' + data.slug}
            className={`new-task-list-item new-task-list-item--open  ${(window.location.pathname === '/task/' + data.slug) && 'new-task-list-item--active'}`}>
            <div className="new-task-list-item__header ">
                <span className="new-task-list-item__title">{data.title}</span>
                <div className="new-task-list-item__price">
                    <span>{Naira + data.price}</span>
                </div>
            </div>
            <div className="new-task-list-item__body">
                <div className="avatar-img new-task-list-item__avatar">
                    <img
                        src={data.user.avatar_url}
                        alt="data.user.last_name"
                        style={{borderRadius: 32}}
                        width="32" height="32"/>
                </div>
                <div className="new-task-list-item__online at-icon-online">
                    <span className="new-task-list-item__detail">{data.type}</span>
                </div>
                <div className="new-task-list-item__date ">
                    <span className="new-task-list-item__detail"><BsCalendar/> {data.due_date}</span>
                </div>
            </div>
            <div className="new-task-list-item__footer">
                <span className="new-task-list-item__status">{data.status || 'OPEN'}</span>
            </div>
        </NavLink>
    )
};


export const TaskImage = () => {
    return (
        <div>

        </div>
    );
};
