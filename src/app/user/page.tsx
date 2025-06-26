type UserListProps = {
  id: number;
  name: string;
};
async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
      ]);
    }, 2000);
  });
}

async function UserList() {
  const userList = await fetchUsers();
  return (
    <div>
      {userList.map((user) => (
        <div key={user.id} className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-gray-100">{user.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default function UserListPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <h2>User List</h2>
      <UserList />
    </div>
  );
}
