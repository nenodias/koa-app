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
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
