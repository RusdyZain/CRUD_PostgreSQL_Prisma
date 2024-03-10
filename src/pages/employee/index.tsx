import React from "react";
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
          </div>
        </div>
      </div>
    </html>
  );
}
