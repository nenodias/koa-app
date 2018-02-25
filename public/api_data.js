define({ "api": [
  {
    "type": "POST",
    "url": "/applications",
    "title": "Application Create",
    "group": "Applications",
    "name": "createApplication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>id of candidate if just want associate to a job</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>firstName must be provided if a new candidate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName must be provided if a new candidate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email must be provided if a new candidate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "JobId",
            "description": "<p>JobId must be provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"id\": 1,\n \"JobId\": 1\n}\n//Another Example Creating Candidate\n{\n \"firstName\": \"Manolo\",\n \"lastName\": \"The Cat\",\n \"email\": \"manolo@thecat.com\",\n \"JobId\": 2\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "A",
            "description": "<p>newly created application object with candidate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Application-Success-Response :",
          "content": "{\n \"CandidateId\": 2,\n \"JobId\": 3,\n \"createdAt\": \"2018-02-25T08:52:14.634Z\",\n \"updatedAt\": \"2018-02-25T08:52:14.634Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"id\":2,\"JobId\": 1}' http://localhost:4000/applications",
        "type": "curl"
      }
    ],
    "description": "<p>User can create application with candidate into the system</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/application.controller.js",
    "groupTitle": "Applications"
  },
  {
    "type": "POST",
    "url": "/companies",
    "title": "Companies Create",
    "group": "Companies",
    "name": "createCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name must be provided</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "address",
            "description": "<p>address must be provided</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "city",
            "description": "<p>city must be provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"name\":\"Google\",\n \"address\": \"St 70\",\n \"city\": \"California\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "A-newly-created-company-object",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Company-Create-Success-Response :",
          "content": "{\n \"id\": 1,\n \"name\":\"Google\",\n \"address\": \"St 70\",\n \"city\": \"California\",\n \"UserId\": 1,\n \"Jobs\": []\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"name\":\"Google\", \"address\": \"St 70\", \"city\": \"California\"}' http://localhost:4000/company",
        "type": "curl"
      }
    ],
    "description": "<p>User can create a job into the system</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "DELETE",
    "url": "/companies/:id",
    "title": "Delete Company",
    "group": "Companies",
    "name": "deleteCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Delete",
            "description": "<p>a Company by id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "company is deleted with id 2",
          "content": "company is deleted with id 2",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X DELETE http://localhost:4000/companies/1",
        "type": "curl"
      }
    ],
    "description": "<p>User can delete one company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "GET",
    "url": "/companies",
    "title": "Get Companies",
    "group": "Companies",
    "name": "getCompanies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Companies",
            "description": "<p>list of Companies with Jobs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Companies-Find-Success-Response :",
          "content": "[\n    {\n        \"Jobs\": [\n            {\n                \"CompanyId\": 1,\n                \"createdAt\": \"2018-02-24T00:02:15.442Z\",\n                \"id\": 5,\n                \"title\": \"Java Developer\",\n                \"updatedAt\": \"2018-02-24T00:02:15.442Z\"\n            }\n        ],\n        \"UserId\": 1,\n        \"address\": \"California St 12\",\n        \"city\": \"California\",\n        \"createdAt\": \"2018-02-24T00:00:29.268Z\",\n        \"id\": 1,\n        \"name\": \"Facebook\",\n        \"updatedAt\": \"2018-02-24T00:00:29.268Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:4000/companies",
        "type": "curl"
      }
    ],
    "description": "<p>User can get all companies</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "GET",
    "url": "/companies/:id",
    "title": "Get Company",
    "group": "Companies",
    "name": "getCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Get",
            "description": "<p>a Company by id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Company-Find-Id-Success-Response :",
          "content": "{\n    \"Jobs\": [\n        {\n            \"CompanyId\": 1,\n            \"createdAt\": \"2018-02-24T00:02:15.442Z\",\n            \"id\": 5,\n            \"title\": \"Java Developer\",\n            \"updatedAt\": \"2018-02-24T00:02:15.442Z\"\n        }\n    ],\n    \"UserId\": 1,\n    \"address\": \"California St 12\",\n    \"city\": \"California\",\n    \"createdAt\": \"2018-02-24T00:00:29.268Z\",\n    \"id\": 1,\n    \"name\": \"Facebook\",\n    \"updatedAt\": \"2018-02-24T00:00:29.268Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:4000/companies/1",
        "type": "curl"
      }
    ],
    "description": "<p>User can get one company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "PUT",
    "url": "/companies/:id",
    "title": "Companies Update",
    "group": "Companies",
    "name": "updateCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>city is optional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "address",
            "description": "<p>city is optional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "city",
            "description": "<p>city is optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"name\":\"Google\",\n \"address\": \"St 70\",\n \"city\": \"California\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "A",
            "description": "<p>message with id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Company-Update-Success-Response :",
          "content": "company is update with id 3",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"name\":\"Google\", \"address\": \"St 70\", \"city\": \"California\"}' http://localhost:4000/company",
        "type": "curl"
      }
    ],
    "description": "<p>User can create a job into the system</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/company.controller.js",
    "groupTitle": "Companies"
  },
  {
    "type": "POST",
    "url": "/jobs",
    "title": "Jobs Create",
    "group": "Jobs",
    "name": "createJob",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title must be provided</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CompanyId",
            "description": "<p>CompanyId must be provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"title\":\"Node.js Developer\",\n \"CompanyId\": 1\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "A",
            "description": "<p>newly created job object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Job-Success-Response :",
          "content": "{\n \"id\": 1,\n \"title\":\"Node.js Developer\",\n \"CompanyId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"title\":\"Node.js Developer\",\"CompanyId\": 1}' http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>User can create a job into the system</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "GET",
    "url": "/jobs",
    "title": "Get Jobs",
    "group": "Jobs",
    "name": "getJobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Job",
            "description": "<p>list of Jobs with Cadidates</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Job-Find-Success-Response :",
          "content": "[\n   {\n       \"Candidates\": [\n           {\n               \"Application\": {\n                   \"CandidateId\": 2,\n                   \"JobId\": 1,\n                   \"createdAt\": \"2018-02-24T00:18:59.357Z\",\n                   \"status_id\": null,\n                   \"updatedAt\": \"2018-02-24T00:18:59.357Z\"\n               },\n               \"createdAt\": \"2018-02-24T00:18:59.192Z\",\n               \"email\": \"horacio.dias@yahoo.com\",\n               \"firstName\": \"Hor\\ufffdcio\",\n               \"id\": 2,\n               \"lastName\": \"Dias\",\n               \"updatedAt\": \"2018-02-24T00:18:59.192Z\"\n           },\n           {\n               \"Application\": {\n                   \"CandidateId\": 1,\n                   \"JobId\": 1,\n                   \"createdAt\": \"2018-02-24T00:20:49.845Z\",\n                   \"status_id\": null,\n                   \"updatedAt\": \"2018-02-24T00:20:49.845Z\"\n               },\n               \"createdAt\": \"2018-02-24T00:05:21.492Z\",\n               \"email\": \"horacio.dias@yahoo.com\",\n               \"firstName\": \"Hor\\ufffdcio\",\n               \"id\": 1,\n               \"lastName\": \"Dias\",\n               \"updatedAt\": \"2018-02-24T00:05:21.492Z\"\n           }\n       ],\n       \"createdAt\": \"2018-02-24T00:01:50.129Z\",\n       \"id\": 1,\n       \"title\": \"NodeJS Developer\",\n       \"updatedAt\": \"2018-02-24T00:01:50.129Z\"\n   },\n   {\n       \"Candidates\": [],\n       \"createdAt\": \"2018-02-24T00:02:10.464Z\",\n       \"id\": 4,\n       \"title\": \"PHP Developer\",\n       \"updatedAt\": \"2018-02-24T00:02:10.464Z\"\n   },\n   {\n       \"Candidates\": [],\n       \"createdAt\": \"2018-02-24T00:02:15.442Z\",\n       \"id\": 5,\n       \"title\": \"Java Developer\",\n       \"updatedAt\": \"2018-02-24T00:02:15.442Z\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X GET http://localhost:4000/jobs",
        "type": "curl"
      }
    ],
    "description": "<p>User can get all jobs with candidates</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Authorization header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Authorization header",
          "content": "{\n   \"authorization\": \"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "POST",
    "url": "/signup",
    "title": "Signup",
    "group": "Users",
    "name": "SignupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email must be provided</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password must be provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"email\":\"test@email.com\",\n \"password\":\"pasword123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Signup",
            "description": "<p>succeful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup-Success-Response :",
          "content": "HTTP/1.1 200OK\n{\n \"message\":\"Signup succeful\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"email\":\"test@email.com\",\"password\":\"password123\"}' http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>User can create sign</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "Login",
    "group": "Users",
    "name": "loginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email must be provided</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Password must be provided</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"email\":\"test@email.com\",\n \"password\":\"pasword123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "A",
            "description": "<p>Json web token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login-Success-Response :",
          "content": "{\n \"token\":\"akofiwehdjsnvbasdopawp21312wklsjlcxz\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"email\":\"test@email.com\",\"password\":\"password123\"}' http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>User can login into the system</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
