import React from "react";
import * as icons from "react-icons/fc";

const Sidebar = () => {
    return (
        <aside>
            <h3>Dashboard</h3>
            <nav className="nav" role="navigation" aria-label="Main">
                <ul>
                    <li className="nav-section">
                        <span className="section-title">Main Menu</span>
                        <ul>
                            <li className="active">
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcPieChart size={24} />
                                    </span>
                                    <span className="label">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcBarChart size={24} />
                                    </span>
                                    <span className="label">Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcFlashOn size={24} />
                                    </span>
                                    <span className="label">Overview</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-section">
                        <span className="section-title">Commerce</span>
                        <ul>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcBriefcase size={24} />
                                    </span>
                                    <span className="label">Products</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcRules size={24} />
                                    </span>
                                    <span className="label">Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcConferenceCall size={24} />
                                    </span>
                                    <span className="label">Customers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcViewDetails size={24} />
                                    </span>
                                    <span className="label">Billing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcShipped size={24} />
                                    </span>
                                    <span className="label">
                                        Deliveries 
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcCurrencyExchange size={24} />
                                    </span>
                                    <span className="label">Earnings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcFlowChart size={24} />
                                    </span>
                                    <span className="label">
                                        Categories
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcPlus size={24} />
                                    </span>
                                    <span className="label">
                                        Add New Product
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-section">
                        <span className="section-title">Engage</span>
                        <ul>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcInvite size={24} />
                                    </span>
                                    <span className="label">Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcAdvertising size={24} />
                                    </span>
                                    <span className="label">Marketing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">🔗</span>
                                    <span className="label">Integrations</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-section">
                        <span className="section-title">Settings</span>
                        <ul>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcSettings size={24} />
                                    </span>
                                    <span className="label">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcPrivacy size={24} />
                                    </span>
                                    <span className="label">Security</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="ico">
                                        <icons.FcBullish size={24} />
                                    </span>
                                    <span className="label">
                                        Help & Support
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
