function Profile() {
  return (
    <div className="profile-page">

      {/* Profile Header */}
      <section className="profile-header">

        <div className="profile-avatar">
          👤
        </div>

        <div>
          <h1>My Profile</h1>
          <p>Welcome back to ShopZone!</p>
        </div>

      </section>


      {/* Personal Information */}
      <section className="profile-card">

        <h2>👤 My Personal Info</h2>

        <div className="profile-info">

          <div>
            <span>Name</span>
            <strong>Your Name</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>your@email.com</strong>
          </div>

          <div>
            <span>Phone</span>
            <strong>+91 XXXXX XXXXX</strong>
          </div>

        </div>

        <button className="edit-profile-btn">
          ✏️ Edit Profile
        </button>

      </section>


      {/* My Orders */}
      <section className="profile-card">

        <h2>📦 My Orders</h2>

        <p>
          View and manage your previous orders.
        </p>

        <button className="profile-action-btn">
          View Orders →
        </button>

      </section>


      {/* My Wishlist */}
      <section className="profile-card">

        <h2>❤️ My Wishlist</h2>

        <p>
          View the products you saved for later.
        </p>

        <button className="profile-action-btn">
          View Wishlist →
        </button>

      </section>


      {/* Settings */}
      <section className="profile-card profile-setting-card">

        <h2>⚙️ Settings</h2>

        <p>
          Manage your ShopZone preferences and account settings.
        </p>

        <button className="profile-action-btn">
          Open Settings →
        </button>

      </section>


      {/* Logout */}
      <section className="profile-logout">

        <button className="logout-btn">
          🚪 Logout
        </button>

      </section>

    </div>
  );
}

export default Profile;