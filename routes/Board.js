
   let Board= [
      { "_id":1,
        "name": "Todo",
        "tasks": [
          { "id":1,
            "title": "Build UI for onboarding flow",
            "description": "",
            "status": "Todo",
            "subtasks": [
              { "id":1,
                "title": "Sign up page",
                "isCompleted": true
              },
              {"id":2,
                "title": "Sign in page",
                "isCompleted": false
              },
              {"id":3,
                "title": "Welcome page",
                "isCompleted": false
              }
            ]
          },
          { "id":2,
            "title": "Build UI for search",
            "description": "",
            "status": "Todo",
            "subtasks": [
              { "id":1,
                "title": "Search page",
                "isCompleted": false
              }
            ]
          }
        ]
      },
      {
        "_id":2,
        "name": "Doing",
        "tasks": [
          { "id":1,
            "title": "Design settings and search pages",
            "description": "",
            "status": "Doing",
            "subtasks": [
              {"id":1,
                "title": "Settings - Account page",
                "isCompleted": true
              },
              { "id":2,
                "title": "Settings - Billing page",
                "isCompleted": true
              },
              {"id":3,
                "title": "Search page",
                "isCompleted": false
              }
            ]
          },
          {"id":2,
            "title": "Add account management endpoints",
            "description": "",
            "status": "Doing",
            "subtasks": [
              {"id":1,
                "title": "Upgrade plan",
                "isCompleted": true
              },
              {"id":2,
                "title": "Cancel plan",
                "isCompleted": true
              },
              {"id":3,
                "title": "Update payment method",
                "isCompleted": false
              }
            ]
          }
        ]
      },
      {"_id":3,
        "name": "Done",
        "tasks": [
          {  "id":1,
            "title": "Conduct 5 wireframe tests",
            "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
            "status": "Done",
            "subtasks": [
              {"id":1,
                "title": "Complete 5 wireframe prototype tests",
                "isCompleted": true
              }
            ]
          }
        ]
      }
    ]
  
  module.exports=Board