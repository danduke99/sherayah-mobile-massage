export default function Test() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Responsive 4-Page Dashboard</title>
      {/* ============ MOBILE SIDEBAR BACKDROP ============ */}
      <div
        id="backdrop"
        className="fixed inset-0 bg-black/40 z-20 hidden md:hidden"
      />
      {/* ============ SIDEBAR ============ */}
      <aside
        id="sidebar"
        className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-xl p-6 space-y-6 z-30
   md:translate-x-0 -translate-x-full transition-transform duration-200"
      >
        <h1 className="text-xl font-bold text-sky-600 dark:text-sky-400">
          Dashboard
        </h1>
        <nav className="space-y-2">
          <a
            href="#home"
            className="nav-link flex items-center gap-2 px-3 py-2 rounded-md bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300"
          >
            <span>📊</span>Home
          </a>
          <a
            href="#users"
            className="nav-link flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span>👥</span>Users
          </a>
          <a
            href="#orders"
            className="nav-link flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span>📦</span>Orders
          </a>
          <a
            href="#settings"
            className="nav-link flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span>⚙️</span>Settings
          </a>
        </nav>
        {/* Theme toggle */}
        <button
          id="themeToggle"
          className="mt-auto w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span id="themeIcon">🌙</span>
          <span id="themeText">Dark</span>
        </button>
      </aside>
      {/* ============ MAIN WRAPPER ============ */}
      <div className="md:ml-64 min-h-screen">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            id="menuBtn"
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            ☰
          </button>
          <h2
            id="pageTitle"
            className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200"
          >
            home
          </h2>
          <div>{/* optional right-side actions */}</div>
        </header>
        <main className="p-4 sm:p-6 space-y-6">
          {/* HOME */}
          <section id="home" className="page">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Analytics
            </h3>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Revenue
                </h4>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  $45,231
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-sm text-gray-500 dark:text-gray-400">Users</h4>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  1,240
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-sm text-gray-500 dark:text-gray-400">Orders</h4>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  3,210
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="text-sm text-gray-500 dark:text-gray-400">Growth</h4>
                <p className="text-2xl font-bold text-green-500">+12%</p>
              </div>
            </div>
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                  Sales Trend
                </h4>
                <canvas id="salesChart" className="w-full h-52" />
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                  Top Products
                </h4>
                <ul
                  id="productsList"
                  className="text-sm text-gray-700 dark:text-gray-300 space-y-2"
                />
              </div>
            </div>
          </section>
          {/* USERS */}
          <section id="users" className="page hidden">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Users
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Role</th>
                  </tr>
                </thead>
                <tbody
                  id="usersTable"
                  className="text-gray-700 dark:text-gray-300"
                />
              </table>
            </div>
          </section>
          {/* ORDERS */}
          <section id="orders" className="page hidden">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Orders
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Total</th>
                  </tr>
                </thead>
                <tbody
                  id="ordersTable"
                  className="text-gray-700 dark:text-gray-300"
                />
              </table>
            </div>
          </section>
          {/* SETTINGS */}
          <section id="settings" className="page hidden">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Settings
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4 max-w-md">
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Site Name
                </span>
                <input
                  type="text"
                  defaultValue="Dashboard Inc."
                  className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-gray-800 dark:text-gray-200"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Timezone
                </span>
                <select className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-gray-800 dark:text-gray-200">
                  <option>UTC</option>
                  <option>GMT+8</option>
                </select>
              </label>
              <button className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700">
                Save Changes
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}