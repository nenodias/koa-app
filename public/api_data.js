define({ "api": [
  {
    "type": "POST",
    "url": "/signup",
    "title": "Cadastre-se",
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
  }
] });
