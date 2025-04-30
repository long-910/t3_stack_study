import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getMembers() {
  // データベースから会員情報を取得
  const members = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return members;
}

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Members List</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{member.id}</td>
                <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                <td className="border border-gray-300 px-4 py-2">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
