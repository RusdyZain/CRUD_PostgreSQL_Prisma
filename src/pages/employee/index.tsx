import Link from "next/link";

export default function Employee() {
  return (
    <html data-theme="light" className="h-screen">
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <div className="flex items-center justify-between gap-1 mb-5">
          <h1 className="text-4xl font-bold">
            Next.js 14 CRUD Create, Read, Update, Delete <br />
            Prisma PostgreSQL | TailwindCSS DaisyUI
          </h1>
        </div>
        <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
            <Link href="/employee/create" className="btn btn-primary">
              Create
            </Link>
            <table className="table table-zebra">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th>1</th>
                  <td>Rifki Rusdi Satma Putra</td>
                  <td>rifkirusdisatmapitra@gmail.com</td>
                  <td>087865693246</td>
                  <td>Date</td>
                  <td>Edit | Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </html>
  );
}
