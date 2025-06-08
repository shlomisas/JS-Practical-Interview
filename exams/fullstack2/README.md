# Fullstack Developer Exam

## Overview

In this exam, you will implement a ChatGPT-like UI with rich chat messages for different company services.

The application will allow users to interact with predefined chat services, and save them for later.

## Requirements

### Chat Services

You need to implement three chat services:

1. **Employee Onboarding**
   - Handles onboarding a new employee to a company

2. **System Access Request**
   - Handles access requests for various systems

3. **Feature Request**
   - Submit new feature requests to the Product team

### Predefined chat files 

Each chat service should be implemented using the provided JSON files in the `data` directory. 

The chat object format is as follows:

```json
{
  "id": "string",        // Unique identifier for the chat
  "title": "string",     // Display title of the chat service
  "description": "string", // Brief description of the chat service
  "messages": [          // Array of message objects
    {
      "id": "string",    // Unique identifier for the message
      "type": "string",  // Message type: "text", "input", or "action"
      "content": "string", // The message content or prompt
      "continue": "boolean", // Optional: if true, this next message should be sent immediately after this one
      "inputType": "string", // Required for "input" type: "text", "select", or "date"
      "options": [       // Required for "select" type: array of option strings
        "string"
      ],
      "validation": {    // Optional: validation rules for input
        "required": "boolean",
        "minLength": "number", // For "text" type
        "maxLength": "number", // For "text" type
        "pattern": "string", // For "text" type: regex pattern for validation
        "errorMessage": "string" // Error message to display if validation fails
      },
      "actions": [       // Required for "action" type: array of action objects
        {
          "type": "string", // "approve" or "deny"
          "label": "string" // Display text for the action button
        }
      ]
    }
  ]
}
```

### Application Flow

1. **Initial Screen**
   - Display a prominent "Join" / "Login" buttons
   - Required user details are `fullName` + `email` + `password`
   - Store user details in the database

2. **Service Selection**
   - Allow users to choose from available chat services list
   - Display chat UI after selection with the first message

3. **Chat Interface**
   - Main input field with submit button
   - Sequential message display
   - Support for all message types
   - Validation for action and input messages

4. **Completion**
   - Show summary modal with all answers
   - Display chat history
   - Allow viewing past chats with disabled input
   - Option to view summary again

## Technical Requirements

- TypeScript
- React for frontend
- Node.js for backend
- Database (SQL or NoSQL)

## Evaluation Criteria

- Code quality and organization
- Requirements understanding 
- Simple and clear code structure
- Database design and implementation
- Error handling
- Performance
- Security considerations

## Time Limit

No time limit, but bear in mind other candidates are doing it in parallel

Good luck! 