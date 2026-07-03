import type { User } from "@/lib/suite/types/crm";

export const teamId = "team_hunter_001";

export const demoUser: User = {
  id: "u_1",
  name: "Alex Hunter",
  email: "alex.hunter@codehunterlab.com",
  role: "admin",
  avatar: "/avatars/alex-hunter.jpg",
  teamId,
};

export const teamMembers: User[] = [
  {
    id: "u_2",
    name: "Sanne de Vries",
    email: "sanne.devries@codehunterlab.com",
    role: "manager",
    avatar: "/avatars/sanne-devries.jpg",
    teamId,
  },
  {
    id: "u_3",
    name: "Mark Jansen",
    email: "mark.jansen@codehunterlab.com",
    role: "sales",
    avatar: "/avatars/mark-jansen.jpg",
    teamId,
  },
  {
    id: "u_4",
    name: "Emma van Dijk",
    email: "emma.vandijk@codehunterlab.com",
    role: "sales",
    avatar: "/avatars/emma-vandijk.jpg",
    teamId,
  },
  {
    id: "u_5",
    name: "Lucas Bakker",
    email: "lucas.bakker@codehunterlab.com",
    role: "sales",
    avatar: "/avatars/lucas-bakker.jpg",
    teamId,
  },
];

export const users: User[] = [demoUser, ...teamMembers];

export const getUsers = (delay = 300) =>
  new Promise<User[]>((resolve) => setTimeout(() => resolve(users), delay));
