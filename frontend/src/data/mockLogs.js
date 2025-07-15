const mockLogs = [
  {
    id: 1,
    user_id: "U010",
    action: "login",
    status: "success",
    message: "User logged in",
    timestamp: "2025-07-14T12:01:00Z",
  },
  {
    id: 2,
    user_id: "U011",
    action: "logout",
    status: "success",
    message: "User logged out",
    timestamp: "2025-07-14T12:02:00Z",
  },
  {
    id: 3,
    user_id: "U012",
    action: "login",
    status: "fail",
    message: "Wrong password attempt",
    timestamp: "2025-07-14T12:03:00Z",
  },
  // ...add more
];

export default mockLogs;
