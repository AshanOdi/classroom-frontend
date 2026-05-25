// import {
//   BaseRecord,
//   DataProvider,
//   GetListParams,
//   GetListResponse,
// } from "@refinedev/core";
// import { Subject } from "@/types";

// const mockSubjects: Subject[] = [
//   {
//     id: 1,
//     code: "CS101",
//     name: "Introduction to Computer Science",
//     department: "Computer Science",
//     description:
//       "Fundamentals of programming, algorithms, data structures, and problem-solving.",
//     createdAt: "2026-05-25T00:00:00.000Z",
//   },
//   {
//     id: 2,
//     code: "BIO220",
//     name: "Molecular Biology",
//     department: "Biological Sciences",
//     description:
//       "Study of cellular systems, genetics, and biomolecular mechanisms in living organisms.",
//     createdAt: "2026-05-25T00:00:00.000Z",
//   },
//   {
//     id: 3,
//     code: "ENG310",
//     name: "Modern Literary Theory",
//     department: "English",
//     description:
//       "Critical approaches to contemporary literature, theory, and cultural interpretation.",
//     createdAt: "2026-05-25T00:00:00.000Z",
//   },
// ];

// export const dataProvider: DataProvider = {
//   getList: async <TData extends BaseRecord = BaseRecord>({
//     resource,
//   }: GetListParams): Promise<GetListResponse<TData>> => {
//     if (resource !== "subjects") {
//       return { data: [] as TData[], total: 0 };
//     }
//     return {
//       data: mockSubjects as unknown as TData[],
//       total: mockSubjects.length,
//     };
//   },

//   getOne: async () => {
//     throw new Error("Method not implemented.");
//   },
//   getMany: async () => {
//     throw new Error("Method not implemented.");
//   },
//   create: async () => {
//     throw new Error("Method not implemented.");
//   },
//   update: async () => {
//     throw new Error("Method not implemented.");
//   },
//   deleteOne: async () => {
//     throw new Error("Method not implemented.");
//   },

//   getApiUrl: () => '',
// };
