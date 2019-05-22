/****************************************************************************
 * 
 * Purpose : To design dashboard for chat app
 * 
 * @description
 * @file : Dashboard.jsx
 * @author : Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 16/05/2019
 * 
 ****************************************************************************/
import React, { Component } from 'react';
import '../App.css'
/**
 * import required files
 */
export default class Dashboard extends Component {
    render() {
        return (
            <div id="container">
                <aside id="sidebar">Users</aside>
                <section id="main">
                    <section id="messages-list">Messages list</section>
                    <section id="new-message">New message</section>
                </section>
            </div>
        )
    }
}