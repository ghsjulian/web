import React from "react";
import "../styles/orders.style.css";

const UsersPage = () => {
  return (
    <div className="container">
      <div id="users" className="tab-content active">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-users"></i> Manage Users
          </h2>
          <button className="add-btn">
            <i className="fas fa-plus"></i> Add User
          </button>
        </div>
        <div className="controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name, email, or role..."
            />
            <i className="fas fa-search"></i>
          </div>
          <select className="filter-select">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Customer</option>
            <option>Manager</option>
          </select>
          <select className="filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="user-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Alex"
                      className="avatar"
                    />
                    <div>
                      <div className="user-name">Alexander Johnson</div>
                      <div className="user-email">alex.j@company.com</div>
                    </div>
                  </div>
                </td>
                <td>alex.j@company.com</td>
                <td>
                  <strong>Admin</strong>
                </td>
                <td>Mar 15, 2021</td>
                <td>
                  <span className="status active">Active</span>
                </td>
                <td>
                  <div className="actions">
                    <div className="btn-icon btn-view" title="View">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="btn-icon btn-edit" title="Edit">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="btn-icon btn-delete" title="Delete">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Sarah"
                      className="avatar"
                    />
                    <div>
                      <div className="user-name">Sarah Williams</div>
                      <div className="user-email">sarah.w@example.com</div>
                    </div>
                  </div>
                </td>
                <td>sarah.w@example.com</td>
                <td>Customer</td>
                <td>Jun 8, 2023</td>
                <td>
                  <span className="status active">Active</span>
                </td>
                <td>
                  <div className="actions">
                    <div className="btn-icon btn-view" title="View">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="btn-icon btn-edit" title="Edit">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="btn-icon btn-delete" title="Delete">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Mike"
                      className="avatar"
                    />
                    <div>
                      <div className="user-name">Mike Chen</div>
                      <div className="user-email">mike.chen@shop.com</div>
                    </div>
                  </div>
                </td>
                <td>mike.chen@shop.com</td>
                <td>Manager</td>
                <td>Nov 1, 2024</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <div className="actions">
                    <div className="btn-icon btn-view" title="View">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="btn-icon btn-edit" title="Edit">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="btn-icon btn-delete" title="Delete">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Mike"
                      className="avatar"
                    />
                    <div>
                      <div className="user-name">Mike Chen</div>
                      <div className="user-email">mike.chen@shop.com</div>
                    </div>
                  </div>
                </td>
                <td>mike.chen@shop.com</td>
                <td>Manager</td>
                <td>Nov 1, 2024</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <div className="actions">
                    <div className="btn-icon btn-view" title="View">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="btn-icon btn-edit" title="Edit">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="btn-icon btn-delete" title="Delete">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Mike"
                      className="avatar"
                    />
                    <div>
                      <div className="user-name">Mike Chen</div>
                      <div className="user-email">mike.chen@shop.com</div>
                    </div>
                  </div>
                </td>
                <td>mike.chen@shop.com</td>
                <td>Manager</td>
                <td>Nov 1, 2024</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <div className="actions">
                    <div className="btn-icon btn-view" title="View">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="btn-icon btn-edit" title="Edit">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="btn-icon btn-delete" title="Delete">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="user-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Mike"
                      className="avatar"
                    />
                    <div>
                      <div className="user-name">Mike Chen</div>
                      <div className="user-email">mike.chen@shop.com</div>
                    </div>
                  </div>
                </td>
                <td>mike.chen@shop.com</td>
                <td>Manager</td>
                <td>Nov 1, 2024</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <div className="actions">
                    <div className="btn-icon btn-view" title="View">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="btn-icon btn-edit" title="Edit">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="btn-icon btn-delete" title="Delete">
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mobile-cards">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Alexander Johnson</div>
                <span className="status active">Active</span>
              </div>
              <div className="card-body">
                <div className="field">
                  <div className="field-label">Email</div>
                  <div className="field-value">alex.j@company.com</div>
                </div>
                <div className="field">
                  <div className="field-label">Role</div>
                  <div className="field-value">Admin</div>
                </div>
                <div className="field">
                  <div className="field-label">Joined</div>
                  <div className="field-value">Mar 15, 2021</div>
                </div>
              </div>
              <div className="card-actions">
                <div className="btn-icon btn-view">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="btn-icon btn-edit">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="btn-icon btn-delete">
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="page-btn arrow">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="page-btn number active">1</div>
          <div className="page-btn number">2</div>
          <div className="page-btn number">3</div>
          <div className="page-btn arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="page-info">Showing 1-10 of 156 users</div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
