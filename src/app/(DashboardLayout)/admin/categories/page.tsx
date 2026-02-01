const AdminCategoriesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Categories</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
          + Add Category
        </button>

        <p className="text-gray-500">
          Category list will be shown here.
        </p>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
