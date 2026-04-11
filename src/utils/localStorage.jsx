const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@company.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website",
        "taskDescription": "Revamp the homepage design",
        "taskDate": "2026-10-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project requirements",
        "taskDate": "2026-10-10",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix bugs",
        "taskDescription": "Resolve bugs reported in issue tracker",
        "taskDate": "2026-10-14",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vivaan",
    "email": "employee2@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize queries for better performance",
        "taskDate": "2026-10-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Data Model",
        "taskDescription": "Create ERD for new feature",
        "taskDate": "2026-10-09",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy to Staging",
        "taskDescription": "Deploy latest build to staging server",
        "taskDate": "2026-10-08",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Aditya",
    "email": "employee3@company.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create slides for upcoming webinar",
        "taskDate": "2026-10-15",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Draft post about new product release",
        "taskDate": "2026-10-13",
        "category": "Content Update"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Review Analytics",
        "taskDescription": "Analyze traffic stats for Q3",
        "taskDate": "2026-10-05",
        "category": "Analytics"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Diya",
    "email": "employee4@company.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "UI Revamp",
        "taskDescription": "Redesign user dashboard",
        "taskDate": "2026-10-20",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "User Testing",
        "taskDescription": "Conduct A/B testing on new flow",
        "taskDate": "2026-10-18",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prototype Animation",
        "taskDescription": "Animate onboarding sequence",
        "taskDate": "2026-10-02",
        "category": "Design"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kavya",
    "email": "employee5@company.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Perform vulnerability assessment",
        "taskDate": "2026-10-16",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Dependencies",
        "taskDescription": "Upgrade all NPM packages to latest versions",
        "taskDate": "2026-10-14",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup CI/CD",
        "taskDescription": "Configure GitHub Actions pipeline",
        "taskDate": "2026-10-01",
        "category": "DevOps"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@company.com",
    "password": "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
}

export { employees, admin }
