export interface CanbanColumn {
  id: number;
  title: string;
  tasks: CanbanTask[];
}
export interface CanbanTask {
  id: number;
  assignedTo: User;
  title: string;
  date: string;
  type: string;
}

export interface User {
  name: string;
  profileImg: string;
}

export const user1 = {
  name: "Robert Meyers",
  profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
};
export const user2 = {
  name: "Gabrial Jackson",
  profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
};
export const user3 = {
  name: "Michael Grayfield",
  profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
};
export const user4 = {
  name: "Samantha Jones",
  profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
};
export const user5 = {
  name: "Lili Donald",
  profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
};
export const user6 = {
  name: "Christine August",
  profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
};
export const dummyCanbanModel: CanbanColumn[] = [
  {
    id: 1,
    title: "Backlog",
    tasks: [
      {
        id: 1,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user1,
      },
      {
        id: 2,
        title: "Provide documentation on integrations",
        date: "Sep 12",
        assignedTo: user2,
        type: "Backend",
      },
      {
        id: 3,
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design",
        assignedTo: user3,
      },
      {
        id: 4,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user2,
      },
      {
        id: 5,
        title: "Test checkout flow",
        date: "Sep 15",
        type: "QA",
        assignedTo: user6,
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    tasks: [
      {
        id: 6,
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design",
        assignedTo: user5,
      },
      {
        id: 7,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user3,
      },
      {
        id: 8,
        title: "Provide documentation on integrations",
        date: "Sep 12",
        type: "Backend",
        assignedTo: user4,
      },
    ],
  },
  {
    id: 3,
    title: "Review",
    tasks: [
      {
        id: 9,
        title: "Provide documentation on integrations",
        date: "Sep 12",
        type: "Backend",
        assignedTo: user2,
      },
      {
        id: 10,
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design",
        assignedTo: user3,
      },
      {
        id: 11,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user6,
      },
      {
        id: 12,
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design",
        assignedTo: user1,
      },
      {
        id: 13,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user4,
      },
    ],
  },
  {
    id: 4,
    title: "Done",
    tasks: [
      {
        id: 14,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user5,
      },
      {
        id: 15,
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design",
        assignedTo: user4,
      },
      {
        id: 16,
        title: "Add discount code to checkout page",
        date: "Sep 14",
        type: "Feature Request",
        assignedTo: user2,
      },
    ],
  },
];
